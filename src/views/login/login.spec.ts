// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('登录测试', () => {
    cy.visit('/login')
    cy.contains('h1', '系统登录')
    cy.get('input[data-cy=username]').clear().type('root')
    cy.get('input[data-cy=password]').clear().type('root')
    cy.get('[data-cy=login]').click()
    cy.url().should('eq', 'http://localhost:4173/')
  })
})

export {}