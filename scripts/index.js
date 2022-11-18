const constants = require('./constant');
const { ethers } = require('ethers');
const { default: Swal } = require('sweetalert2');
const constant = require('./constant');
var provider;

window.connect = async function() {
    try {
        let currentSigner = await connectWallet();
        let currentSignerAddress = await currentSigner.getAddress();
        setLayoutWalletConnected(currentSignerAddress);
    } catch(err) {
        handleError(err);
    }
}
 
window.seeMyBalance = async function() {
    try {
        let currentSigner = await connectWallet();
        let currentSignerAddress = await currentSigner.getAddress();
        let userBalanceMessage = await retrieveUserBalance(currentSignerAddress);
        var balanceAlertArgs = {
            title: constants.TITLE_BALANCE,
            icon: constants.ICON_INFO,
            html: userBalanceMessage,
            showConfirmButton: true
        };
        fillshowAlert(balanceAlertArgs);
    } catch(err) {
        handleError(err);
    }
}

window.transferToken = async function() {
    try {
        let currentSigner = await connectWallet();
        let contractInstance = new ethers.Contract(constants.GOERLI_TOKEN_ADDRESS, constants.ABI_TOKEN, currentSigner);
        let checkifExistContract = await provider.getCode(contractInstance.address);
        if(checkifExistContract === constants.ERROR_CODE_SMART_CONTRACT_ADDRESS_NOT_EXIST){
            let errorContractNotExists = {
                code: constants.ERROR_CODE_CALL_EXCEPTION,
            };
            throw errorContractNotExists;
        }
        let transaction = await contractInstance.mintToken();
        var transferAlertArgs = {
            title: constants.TITLE_SUCCESS,
            icon: constants.ICON_SUCCESS,
            html: '<p>Awesome, you have minted 1 unit of Kerry Token! <br><br> You can see your transaction progress here: <br> <a href="' + constants.GOERLI_ETHERSCAN + transaction.hash + '" target="_blank" style="text-decoration:underline;color:blue;">' + transaction.hash + '</a></p>',
            showConfirmButton: true
        }
        fillshowAlert(transferAlertArgs);
    } catch(err) {
        handleError(err);
    }
}

async function connectWallet() {
    if(typeof window.ethereum === 'undefined'){
        var err = {
            code: constant.ERROR_CODE_METAMASK_NOT_INSTALLED
        }
        throw err;
    }
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await ethereum.request({ method: 'eth_requestAccounts' });
    return provider.getSigner(); 
}

async function retrieveUserBalance(currentSignerAddress) {
    let contractInstance = new ethers.Contract(constants.GOERLI_TOKEN_ADDRESS, constants.ABI_TOKEN, provider);
    let tokenName = await contractInstance.name();
    let tokenSymbol = await contractInstance.symbol();
    let tokenDecimal = await contractInstance.decimals();
    let tokenUserBalance = await contractInstance.balanceOf(currentSignerAddress);
    let networkName = contractInstance.provider._network.name;
    let formattedNetworkName = networkName.replace(/./, networkName[0].toUpperCase());
    tokenUserBalance = (tokenUserBalance / (Math.pow(10,18)));
    let arrayMessages = [formattedNetworkName, contractInstance.address, tokenName, tokenSymbol, tokenDecimal, tokenUserBalance];
    let arrayConstantsMessages = [constants.TEXT_TOKEN_NETWORK, constants.TEXT_TOKEN_ADDRESS, constants.TEXT_TOKEN_NAME, constants.TEXT_TOKEN_SYMBOL, constants.TEXT_TOKEN_DECIMAL, constants.TEXT_TOKEN_USER_BALANCE];
    let balanceMessage = formatBalanceMessage(arrayMessages, arrayConstantsMessages);
    return balanceMessage;
}

function formatBalanceMessage(arrayMessages, arrayConstantsMessages) {
    let balanceMessage = "";
    for(let i = 0; i < arrayMessages.length && i < arrayConstantsMessages.length; i++) {
        balanceMessage = balanceMessage.concat(arrayConstantsMessages[i]).concat("<b>").concat(arrayMessages[i]).concat("</b>").concat("<br>");
    }
    return balanceMessage;
}

function setLayoutWalletConnected(signerAddress) {
    let btnConnect = document.getElementById('btnConnect'); 
    let arrowBottom = document.getElementById('arrowBottom');
    let btnBalance = document.getElementById('btnBalance');
    let btnClaim = document.getElementById('btnClaim');
    let labelUnlockMetamask = document.getElementById('labelUnlockMetamask');
    btnConnect.textContent = signerAddress;
    btnConnect.classList.remove('bg-black');
    btnConnect.classList.remove('lg:text-base');
    btnConnect.classList.add('lg:text-lgSizeAddress');
    arrowBottom.classList.add('hidden');
    btnConnect.style.cssText += 'background-color: #22C55E; pointer-events: none;';
    btnConnect.style.cssText += 'animation: move 2s;';
    btnBalance.classList.remove('hidden');
    btnClaim.classList.remove('hidden');
    btnBalance.style.cssText += 'animation: move 2s;';
    btnClaim.style.cssText += 'animation: move 2s;';
    labelUnlockMetamask.classList.add('hidden');
}

function handleError(errorObject) {
    let errorAlertArgs = null;
    switch(errorObject.code) {
        case constants.ERROR_CODE_4001:
            errorAlertArgs = {
                title: constants.TITLE_ERROR,
                icon: constants.ICON_ERROR,
                html: constants.ERROR_MESSAGE_CODE_4001,
                showConfirmButton: true
            };
            break;
        case constants.ERROR_CODE_CALL_EXCEPTION:
            errorAlertArgs = {
                title: constants.TITLE_ERROR,
                icon: constants.ICON_ERROR,
                html: constants.ERROR_MESSAGE_CALL_EXCEPTION,
                showConfirmButton: true
            };
            break;
        case constants.ERROR_CODE_ACTION_REJECTED:
            errorAlertArgs = {
                title: constants.TITLE_ERROR,
                icon: constants.ICON_ERROR,
                html: constants.ERROR_MESSAGE_ACTION_REJECTED,
                showConfirmButton: true
            };
            break;
        case constants.ERROR_CODE_METAMASK_NOT_INSTALLED:
            errorAlertArgs = {
                title: constants.TITLE_ERROR,
                icon: constants.ICON_ERROR,
                html: constants.ERROR_MESSAGE_METAMASK_NOT_INSTALLED,
                showConfirmButton: true
            };
            break;
        default:
            errorAlertArgs = {
                title: constants.TITLE_ERROR,
                icon: constants.ICON_ERROR,
                html: errorObject.message,
                showConfirmButton: true
            }
            break;
        }
    fillshowAlert(errorAlertArgs);
}

function fillshowAlert(args) {
    Swal.fire({
        title: args.title,
        icon: args.icon,
        html: args.html,
        showConfirmButton: args.showConfirmButton
    });
}