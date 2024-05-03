import { BrowserRouter as Router } from "react-router-dom";
import Login from "../../src/components/login";

describe("Login Functionality", () => {
  beforeEach(() => {
    // Mount the Login component before each test
    cy.mount(
      <Router>
        <Login />
      </Router>
    );
  });

  it("should login with valid credentials", () => {
    // Type valid credentials and submit the form
    cy.get('input[name="email"]').type("tharindunavi1@gmail.com");
    cy.get('input[name="password"]').type("Navi123*");
    cy.get('button[type="submit"]').click();

   
  });

  it("show go to picture of the day page after successful login", () => {
     // Check if user is redirected to the main page after successful login
     cy.url().should("include", "/main");
  }
);

  it("should show error message with invalid credentials", () => {
    // Type invalid credentials and submit the form
    cy.get('input[name="email"]').type("invalid@email.com");
    cy.get('input[name="password"]').type("invalidPassword");
    cy.get('button[type="submit"]').click();

    // Check if error message is displayed
    cy.contains("email or password incorrect").should("be.visible");
  });
});
