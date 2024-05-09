class HomePage {
    visit() {
      cy.visit('https://www.amazon.in');
    }
  
  }
  
  export default new HomePage();