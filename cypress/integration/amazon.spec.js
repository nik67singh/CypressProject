/// <reference types="cypress" />
import CartPage from '../pageObjects/CartPage';
import CheckoutPage from '../pageObjects/CheckoutPage';
import HomePage from '../pageObjects/homePage';
import SearchPage from '../pageObjects/SearchPage';

describe('Amazon test cases', () => {

  beforeEach(()=>{
    HomePage.visit();
  });

  it('Add a product to cart',() => {
    SearchPage.search();
    CartPage.selecting();
    CheckoutPage.checkout();
  });

  it('Verify cart is empty',() =>{
    CheckoutPage.checkout();
    CheckoutPage.empty();

  });


});