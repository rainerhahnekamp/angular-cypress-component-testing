it('should test the request info', () => {
  cy.visit('http://localhost:4200');
  cy.get('[data-testid="btn-holidays"]').click();
  cy.get('app-holiday-card').first().find('a').click();
  cy.testid('address').type('Domgasse 5');
  cy.testid('btn-search').click();
  cy.testid('lookup-result').should('have.text', 'Brochure sent');
});
