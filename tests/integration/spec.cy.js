/// <reference types="cypress"/>

// Important: Change this variable value with wallet address that you'll use from 
var walletAddress = 'YOUR_METAMASK_WALLET_ADDRESS';

var titleMintTokenSuccessfully = 'Successfully Transfer';
var titleError = 'Error';
var titleBalance = 'Your balance';
var errorMessage4001 = 'You have rejected the request. Please, try again and make sure to accept it!';
var errorMessageActionRejected = 'You have denied the transaction signature. Please, try again and make sure to sign the transaction!';
var errorMessageCallException = 'Please check your Metamask network have been set to Goerli Network';

describe('Interaction Metamask wallet when it doesn\'t connect to site yet', () => {
  
  before(() => {
    cy.disconnectMetamaskWalletFromAllDapps();
    cy.reload();
  })

  it('displaying error message when user reject to connect its wallet to the site', () => {
    cy.visit('http://localhost:5500');
    cy.get('[class="swal2-title"]').should('have.text', titleError);
    cy.get('[class="swal2-html-container"]').should('have.text', errorMessage4001);
    cy.get('[class="swal2-confirm swal2-styled"]').click();
    cy.get('[data-cy="btnConnect"]').should('be.visible');
    cy.get('[data-cy="btnConnect"]').should('have.text', 'Connect your wallet');
    cy.get('[data-cy="labelUnlockMetamask"]').should('be.visible');
    cy.get('[data-cy="btnSeeMyBalance"]').should('not.be.visible');
    cy.get('[data-cy="btnClaim"]').should('not.be.visible');
  })
  
})

describe('Interaction Metamask wallet when it connected to site', () => {

    before(() => {
      cy.setupMetamask();
      cy.get('[data-cy="btnConnect"]').click();
      cy.changeMetamaskNetwork('goerli');
    })
   
    it('displaying Metamask wallet address account inside site and relative functionalities', async() => {
      cy.visit('http://localhost:5500');
      cy.get('[data-cy="btnConnect"]').should('be.visible').and('have.text', walletAddress);
      cy.get('[data-cy="btnSeeMyBalance"]').should('be.visible');
      cy.get('[data-cy="btnClaim"]').should('be.visible');
    })

    it('displaying balance token account when metamask wallet connected and user click on button called "See my Balance"', () => {
      cy.visit('http://localhost:5500');
      cy.get('[data-cy="btnSeeMyBalance"]').should('be.visible');
      cy.get('[data-cy="btnSeeMyBalance"]').click();
      cy.get('[id="swal2-title"]').contains(titleBalance);
      cy.get('[class="swal2-confirm swal2-styled"]').click();
    })
    
    it('display successfully message when user minted a token clicking on button called "Mint a token"', () => {
      cy.visit('http://localhost:5500');
      cy.get('[data-cy="btnClaim"]').should('be.visible');
      cy.get('[data-cy="btnClaim"]').click();
      cy.get('[id="swal2-title"]').contains(titleMintTokenSuccessfully);
      cy.get('[class="swal2-confirm swal2-styled"]').click();
    })
    
    it('display error message when user reject to sign the mint token operation', () => {
      cy.visit('http://localhost:5500');
      cy.get('[data-cy="btnClaim"]').should('be.visible');
      cy.get('[data-cy="btnClaim"]').click();
      cy.get('[id="swal2-title"]').contains(titleError);
      cy.get('[id="swal2-html-container"]').contains(errorMessageActionRejected);
      cy.get('[class="swal2-confirm swal2-styled"]').click();
    })

})

describe('Interaction Metamask wallet when it connected to network different to Goerli', () => {
  
  before(() => {
    cy.setupMetamask();
    cy.changeMetamaskNetwork('mainnet');
  })

  it('displaying site when metamask wallet connected', () => {
    cy.visit('http://localhost:5500');
    cy.get('[data-cy="btnConnect"]').should('be.visible').contains(walletAddress);
    cy.get('[data-cy="btnSeeMyBalance"]').should('be.visible');
    cy.get('[data-cy="btnClaim"]').should('be.visible');
  })

  it('displaying error when user would like to see his balance', () => {
    cy.visit('http://localhost:5500');
    cy.get('[data-cy="btnConnect"]').should('be.visible').contains(walletAddress);
    cy.get('[data-cy="btnClaim"]').should('be.visible');
    cy.get('[data-cy="btnSeeMyBalance"]').should('be.visible').click();
    cy.get('[id="swal2-title"]').contains(titleError);
    cy.get('[id="swal2-html-container"]').contains(errorMessageCallException);
    cy.get('[class="swal2-confirm swal2-styled"]').click();
  })

  it('displaying error when user would like to do the mint operation', () => {
    cy.visit('http://localhost:5500');
    cy.get('[data-cy="btnConnect"]').should('be.visible').contains(walletAddress);
    cy.get('[data-cy="btnSeeMyBalance"]').should('be.visible');
    cy.get('[data-cy="btnClaim"]').should('be.visible');
    cy.get('[data-cy="btnClaim"]').click();
    cy.get('[id="swal2-title"]').contains(titleError);
    cy.get('[id="swal2-html-container"]').contains(errorMessageCallException);
    cy.get('[class="swal2-confirm swal2-styled"]').click();
  })
  
})