import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BsBoxArrowRight } from "react-icons/bs";

// Header component
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token") !== null;

  const handleLogout = () => {
    // Clear user session
    localStorage.removeItem("token");
    // Navigate to the login page
    navigate("/");
  };

  return (
    <header className="bg-gradient-to-bl from-purple-900 to-black">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-20"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only ">SpaceWatch</span>
            <img
              className="h-16 w-auto"
              src="images/Space.png"
              alt="Space Watch"
              style={{ filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))" }}
            />
          </a>
          <span className="text-white text-xl font-semibold mr-2 flex flex-col justify-center items-center ml-2 ">
            SpaceWatch
          </span>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1  ">
          {isLoggedIn ? (
            <Link to="/main" className="text-sm font-semibold  text-white">
              Picture of the Day
            </Link>
          ) : null}
        </div>

        <div className="hidden lg:flex lg:flex-1  ">
          {isLoggedIn ? (
            <Link
              to="/earth"
              className="text-white text-sm font-semibold mr-2 flex justify-center"
            >
              Earth Imagery
            </Link>
          ) : null}
        </div>

        <div className="hidden lg:flex lg:flex-1  ">
          {/*if user is logged in, show the link to the Mars rover photos page*/}
          {isLoggedIn ? (
            <Link
              to="/rover"
              className="text-white text-sm font-semibold mr-2 flex justify-center"
            >
              Mars rover photos
            </Link>
          ) : null}
        </div>

        <div className="hidden lg:flex lg:flex-2 lg:justify-end">
          {/*if user is logged in, show the menu to logout*/}
          {isLoggedIn ? (
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="flex items-center justify-center">
                <img
                  className="h-10 w-10 rounded-full"
                  src="images/profile.jpg"
                  alt="Profile"
                />
              </Menu.Button>
              <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`${
                          active ? "bg-gray-100" : ""
                        } group flex rounded-md justify-center items-center w-full px-2 py-2 text-sm text-gray-900 font-semibold`}
                      >
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          ) : (
            //user is not logged in, show the link to login page
            <ul>
              <li>
                <Link
                  to="/login"
                  className="text-white text-lg font-semibold mr-2 flex justify-center"
                >
                  Login
                  <BsBoxArrowRight className="ml-2 mt-1 self-center" />
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-bl from-purple-900 to-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">NASA Logo</span>
              <img
                className="h-8 w-auto"
                src="images/Space.png"
                alt="NASA-Logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 justify-center items-center ">
                {isLoggedIn ? (
                  <ul>
                    <div className="flex flex-col justify-center items-center">
                    <img
                      className="h-16 w-auto rounded-full justify-center items-center mx-auto mb-10"
                      src="/images/profile.jpg"
                      alt="Profile"
                    />
                   

                    <li >
                      <button className="text-white text-lg font-semibold" onClick={handleLogout} >
                        Logout
                      </button>
                    </li>
                    </div>
                    <li>
                      <Link
                        to="/main"
                        className="text-white text-lg font-semibold mr-2 flex flex-col justify-center items-center"
                      >
                        Picture of the Day
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/earth"
                        className="text-white text-lg font-semibold mr-2 flex flex-col justify-center items-center"
                      >
                        Earth Imagery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/rover"
                        className="text-white text-lg font-semibold mr-2 flex flex-col justify-center items-center"
                      >
                        Mars Rover Photos
                      </Link>
                    </li>

                  </ul>
                ) : (
                  <ul>
                    <li>
                      <Link
                        to="/login"
                        className="text-white text-lg font-semibold mr-2 flex flex-col justify-center"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
