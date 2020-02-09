/// <reference types="cypress" />

context('Greeting Application', () => {
  beforeEach(() => {
    cy.visit('/app.html')
  })

  it('shows the appropriate greeting text on page load', () => {
    cy.get('[data-test=greeting-text]').contains('Hello World!')
  })

  it('greets the user with their name after form submission', () => {
    // With return key
    cy.get('[data-test=greeting-input]').type('Stephen{enter}')

    cy.get('[data-test=greeting-text]').contains('Hello Stephen!')

    // With button click
    cy.get('[data-test=greeting-input]').type('Stephen Again')
    cy.get('[data-test=greeting-submit]').click()

    cy.get('[data-test=greeting-text]').contains('Hello Stephen Again!')
  })
})
