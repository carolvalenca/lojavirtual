describe('purchase product', () => {
  it('user wants to purchase cart products', () => {
    //open main page
    cy.visit('/')

    //click on product
    cy.contains('ver detalhes').click()

    //select the size of the product
    cy.contains('XS').click()

    //add to cart
    cy.contains('Adicionar ao carrinho').click()

    //go to cart's page
    cy.get('[data-test-id="cartButton"]').click() 

    //purchase
    cy.contains('FINALIZAR COMPRA').click()
  })
})

describe('add more products to cart', () => {
  it('user wants to add more products to cart before buying them', () => {
    //open main page
    cy.visit('/')
    cy.contains('ver detalhes').click()
    cy.contains('XS').click()
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Voltar').click()
    cy.get('[data-test-id="cartButton"]').click()
    cy.contains('CONTINUAR COMPRANDO').click()
    cy.contains('ver detalhes').click()
    cy.contains('XL').click()
    cy.contains('Adicionar ao carrinho').click()
    cy.get('[data-test-id="cartButton"] span').should('have.text', '2')
  })
})

describe('purchase a specific product', () => {
  it('user wants to search for a specific product and buys it', () => {
    //open main page
    cy.visit('/')

    //search for product
    cy.get('input').type('produto 12')

    //click on product
    cy.contains('ver detalhes').click()

    //select the size of the product
    cy.contains('XS').click()

    //add to cart
    cy.contains('Adicionar ao carrinho').click()

    //go to cart's page
    cy.get('[data-test-id="cartButton"]').click()

    //check if it is the product user really wants to buy
    cy.get('[data-test-id="cartProduct"] h3').should('have.text', 'produto 12')

    //purchase
    cy.contains('FINALIZAR COMPRA').click()
  })
})