/// <reference types="cypress" />

context('End-to-end-testing in cypress talk', () => {
  beforeEach(() => {
    cy.visit('/talk.html')
  })

  it('shows the slides and navigates them as one would expect', () => {
    cy.pause()
    
    cy.contains('End-to-end testing with Cypress')
    cy.get('body').type('{rightarrow}')
    cy.pause()

    cy.contains('Who am I?')
    cy.get('body').type('{leftarrow}')
    cy.pause()

    cy.contains('End-to-end testing with Cypress')
  })
})
