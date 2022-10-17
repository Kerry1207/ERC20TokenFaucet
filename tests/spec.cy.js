/// <reference types="cypress" />
import { MockProvider } from '@rsksmart/mock-web3-provider';
import constant from '../../scripts/constant';
import ethers from 'ethers';
import { mock, resetMock } from '@depay/web3-mock';
const addressMetamask = "0x7E0B3732b40470a221dD8344c1a383278ad2C746";

describe('interaction metamask wallet when it connected to site yet', () => {
  let contractInstance;

  beforeEach(async() => {
    cy.on("window:before:load", (win) => {
      win.ethereum = new MockProvider({ address:addressMetamask, networkVersion: 31, chainId: 4, debug:false, manualConfirmEnable: false })
      contractInstance = new ethers.Contract(
        constant.RINKEBY_TOKEN_ADDRESS, constant.RINKEBY_ABI_TOKEN, new MockProvider({ address:addressMetamask, networkVersion: 31, chainId: 4, debug:false, manualConfirmEnable: false })
      )
    })
    
  })

  it('display Metamask address account inside homepage site', () => {
      cy.visit("http://localhost:5500");
      cy.get('[data-cy="btnConnect"]').contains(addressMetamask)
      cy.get('[data-cy="btnSeeMyBalance"]').should('be.visible')
      cy.get('[data-cy="btnClaim"]').should('be.visible')
  })

  it('display token balance account when metamask is connected and user click on button', () => {
    cy.visit("http://localhost:5500");
    cy.get('[data-cy="btnSeeMyBalance"]').should('be.visible');
    cy.get('[data-cy="btnSeeMyBalance"]').click().then(()=>{
      cy.spy(contractInstance, 'name').return('Kerry');
    });
  })
})

describe('interaction metamask wallet when it doesn\'t connect to the site', () => {
  beforeEach(() => {
    cy.on("window:before:load", (win) => {
      win.ethereum = new MockProvider({ address:addressMetamask, networkVersion: 4, debug: false, manualConfirmEnable: true })
    })
  })

  // assuming there is an item displaying the account when the user logs in
  it('display Metamask address account inside homepage site', () => {
      cy.visit("http://localhost:5500");
      cy.get('[data-cy="btnConnect"]').contains('Connect your wallet')
      cy.get('[data-cy="btnConnect"]').should('be.visible')
      cy.get('[data-cy="btnClaim"]').should('not.be.visible')
      cy.get('[data-cy="btnSeeMyBalance"]').should('not.be.visible')
      cy.get('[data-cy="labelUnlockMetamask"]').should('be.visible')
  })
})