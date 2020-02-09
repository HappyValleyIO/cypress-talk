/// <reference types="cypress" />

const viewports = [
  {
    name: 'desktop',
    width: 1400,
    height: 900
  },
  {
    name: 'tablet',
    width: 768,
    height: 1024
  },
  {
    name: 'mobile',
    width: 375,
    height: 667
  }
]

viewports.forEach(viewport => {
  context(`Greeting Application on ${viewport.name}`, () => {
    beforeEach(() => {
      cy.visit('/app.html')
      cy.viewport(viewport.width, viewport.height)
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
})
