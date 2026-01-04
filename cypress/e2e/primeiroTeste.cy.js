describe('Smoke test - Login', () => {
  it('Deve acessar a página de login com sucesso', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.contains('Login Page').should('be.visible')
  })
})
