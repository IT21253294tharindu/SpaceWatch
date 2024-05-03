import MarsPhotosPage from "../../src/pages/marsphotosPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("Mars Photos Page", () => {
  beforeEach(() => {
    // Visit the Mars Photos page
    cy.mount(
      <Router>
        <MarsPhotosPage />
      </Router>
    );
  });

  it("should display photos grid", () => {
    // Check if the photos grid is visible
    cy.get(".grid").should("be.visible");
  });

  it("should navigate to next and previous pages", () => {
    // Check if the next button is visible and clickable
    cy.get("button:contains('Next')").should("be.visible").click();

    // Check if the page number has incremented
    cy.contains("span", "2").should("be.visible");

    // Check if the previous button is visible and clickable
    cy.get("button:contains('Previous')").should("be.visible").click();

    // Check if the page number has decremented
    cy.contains("span", "1").should("be.visible");
  });

  it("should display photo details", () => {
    // Check if the photo details are displayed
    cy.get("h2").should("be.visible");
    cy.get("p").should("be.visible");
  });
});
