/// <reference types="Cypress" />

describe("Verify API waits and Stubs",function () {
    beforeEach("Navigate to the URL",function () {
        cy.visit("https://example.cypress.io/commands/network-requests");
    })
    it("Verify if XHR Wait is working for GET",function () {
        cy.server();
        cy.route("GET", "/comments/1").as("GETCall");
        cy.get("[class*='network-btn']").click();
        cy.wait("@GETCall").then(function (resp) {
            expect(resp.status).equals(200);
        })
    })

    it("Verify if XHR Wait is working for POST",function () {
        /*
        ---------- Assignment
         */
    })

    it("Verify if Mocks is working for PUT",function () {
        cy.server();
        cy.route({method:"PUT", url:"comments/1",status: 404, response: { error: "My customized message" }, delay: 500}).as("PUTCall");
        cy.get("[class*='network-put']").first().click();
    })

    it.skip("Verify if Mock is working for GET call",function () {
        /*
        -------- Assignment
        Instead of comment on GET mock your name
         */
    })
})