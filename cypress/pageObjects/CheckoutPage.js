class CheckoutPage{
    checkout(){
        cy.get('span#nav-cart-count').should('be.visible')
        cy.get('span#nav-cart-count').click()
    }
    empty(){
        cy.get('.a-span8 > .a-row > h2').should('be.visible')
    }
}

export default new CheckoutPage();