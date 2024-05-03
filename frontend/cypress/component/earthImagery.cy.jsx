import EarthImageryPage from "../../src/pages/earthImageryPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("Earth Imagery Page", () => {
  beforeEach(() => {
    // Visit the Earth Imagery page
    cy.mount(
      <Router>
        <EarthImageryPage />
      </Router>
    );
  });

  it("should display the Earth Imagery data for selected year and month", () => {
    // Check if the page title is correct
    cy.contains("h1", "Earth Imagery Data").should("be.visible");

    // Check if the select elements for year and month are visible
    cy.get("#year").should("be.visible");
    cy.get("#month").should("be.visible");

    // Select a year and month
    cy.get("#year").select("2021");
    cy.get("#month").select("03");

    // Check if the loading indicator disappears after data is loaded
    cy.contains("Loading...").should("not.exist");

    // Check if the image is displayed
    cy.get("img").should("be.visible");

    // Check if the Earth Imagery data is displayed
    cy.contains("Date:").should("be.visible");
    cy.contains("Dataset:").should("be.visible");
    cy.contains("Planet:").should("be.visible");
    cy.contains("Service Version:").should("be.visible");
  });

  it("should redirect to the landing page if user is not logged in", () => {
    // Log out the user by removing the token from localStorage
    cy.window().then((win) => {
      win.localStorage.removeItem("token");
    });

    // Check if the page redirects to the landing page
    cy.url().should("include", "/");
  });
});
