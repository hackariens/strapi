describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://strapi.traefik.me');
    cy.screenshot('first-page');
  })
})