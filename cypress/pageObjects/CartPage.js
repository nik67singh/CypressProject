class CartPage{
    selecting(){
        cy.get('#a-autoid-1-announce').click()
        cy.wait(2000)
    }
}

export default new CartPage();