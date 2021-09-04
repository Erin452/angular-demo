describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/twoway')
    cy.url().should('include', '/twoway')
  })
})
