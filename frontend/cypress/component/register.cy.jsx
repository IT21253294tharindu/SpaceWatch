import Register from "../../src/components/register";
import { BrowserRouter as Router } from "react-router-dom";

describe("Register Functionality", () => {
  beforeEach(() => {
    cy.mount(
      <Router>
        <Register />
      </Router>
    ); //  Register component is rendered before each test
  });

  it("should register a new user with valid details", () => {
    // Fill out the registration form with valid details
    cy.get('input[name="name"]').type("John Doe");
    cy.get('input[name="email"]').type("johndoe@example.com");
    cy.get('input[name="password"]').type("Strong123*");
    cy.get('input[name="confirm-password"]').type("Strong123*");
    cy.get('input[type="checkbox"]').check(); // Check the terms checkbox

    // Submit the form
    cy.get('button[type="submit"]').click();

    
  });
  it("redirect to login page after successful registration", () => {
    // Assert that the user is redirected to the login page
    cy.contains("Login", { timeout: 10000 }).should("be.visible");
  });

  it("should show an error message if passwords do not match", () => {
    // Fill out the registration form with mismatched passwords
    cy.get('input[name="name"]').type("John Doe");
    cy.get('input[name="email"]').type("johndoe@example.com");
    cy.get('input[name="password"]').type("Password123");
    cy.get('input[name="confirm-password"]').type("DifferentPassword123");
    cy.get('input[type="checkbox"]').check(); // Check the terms checkbox

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Assert that an error toast message appears
    cy.contains("Password do not match").should("be.visible");
  });

  // Add more test cases as needed
});
