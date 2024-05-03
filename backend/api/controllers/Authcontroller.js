import user from "../models/user";
import bcrypt from "bcrypt";
import joi from "joi";
import passwordComplexity from "joi-password-complexity";
import jwt from "jsonwebtoken";

//register user
const register = async (req, res) => {
  try {
    var userdata = req.body;
    const { error } = validateRegister(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const User = await user.findOne({ email: userdata.email });
    if (User) {
      return res
        .status(409)
        .send({ message: "user with given email already exists" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashpassword = await bcrypt.hash(userdata.password, salt);
    const newUser = await user.create({ ...userdata, password: hashpassword });
    res
      .status(201)
      .send({ message: "user created successfully", data: newUser });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

//login user
const login = async (req, res) => {
  try {
    const userdata = req.body;
    const { error } = validatelogin(req.body);

    if (error) {
      console.error(error.details[0].message);
      return res.status(400).send(error.details[0].message);
    }

    const User = await user.findOne({ email: userdata.email });
    if (!user) {
      return res
        .status(404)
        .send({ message: "user with given email does not exist" });
    }
    const validpassword = await bcrypt.compare(
      userdata.password,
      User.password
    );
    if (!validpassword) {
      console.error("invalid password");
      return res.status(400).send({ message: "invalid password" });
    }

    const token = jwt.sign({ _id: User._id }, process.env.JWT_KEY, {
      expiresIn: "7d",
    });
    res.status(200).send({ message: "login successfull", token: token });
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
};

//validate user input
const validateRegister = (data) => {
  const schema = joi.object({
    name: joi.string().required().label("name"),
    email: joi.string().email().required().label("email"),
    password: passwordComplexity().required().label("password"),
  });
  return schema.validate(data);
};

//validate user input
const validatelogin = (data) => {
  const schema = joi.object({
    email: joi.string().email().required().label("email"),
    password: passwordComplexity().required().label("password"),
  });
  return schema.validate(data);
};

export default { register, login, validateRegister, validatelogin };
