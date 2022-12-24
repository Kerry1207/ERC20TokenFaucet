module.exports = Object.freeze({
    ABI_TOKEN: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],
    
    // GENERAL CONSTANTS
    GOERLI_NAME: 'GOERLI',
    GOERLI_CHAINID: '5',
    GOERLI_TOKEN_ADDRESS: '0xcf185f2F3Fe19D82bFdcee59E3330FD7ba5f27ce',
    GOERLI_ETHERSCAN: 'https://goerli.etherscan.io/tx/',    
    SEPOLIA_NAME: 'SEPOLIA',
    SEPOLIA_CHAINID: '11155111',
    SEPOLIA_TOKEN_ADDRESS: '0xcf185f2F3Fe19D82bFdcee59E3330FD7ba5f27ce',
    SEPOLIA_ETHERSCAN: 'https://sepolia.etherscan.io/tx/',
    ALLOWED_NETWORKS: ['11155111','5'],
    
    // CONSTANTS ICON SWALALERT
    ICON_INFO: 'info',
    ICON_ERROR: 'error',
    ICON_SUCCESS: 'success',

    // TITLES SWALALERT
    TITLE_BALANCE: 'Your balance',
    TITLE_ERROR: '<b>Error</b>',
    TITLE_SUCCESS: 'Successfully Transfer',

    // ERROR CODES
    ERROR_CODE_CALL_EXCEPTION: 'CALL_EXCEPTION',
    ERROR_CODE_4001: 4001,
    ERROR_CODE_SMART_CONTRACT_ADDRESS_NOT_EXIST: '0x',
    ERROR_CODE_ACTION_REJECTED: 'ACTION_REJECTED',
    ERROR_CODE_METAMASK_NOT_INSTALLED: 'METAMASK_NOT_INSTALLED',

    // ERROR MESSAGES
    ERROR_MESSAGE_CALL_EXCEPTION: '<p>Please check your Metamask network have been set to <u>Goerli</u> or <u>Sepolia Network</u></p>',
    ERROR_MESSAGE_CODE_4001: 'You have <b>rejected</b> the request.<br> Please, try again and make sure to accept it!',
    ERROR_MESSAGE_ACTION_REJECTED: 'You have <b>denied</b> the transaction signature.<br> Please, try again and make sure to sign it!',
    ERROR_MESSAGE_METAMASK_NOT_INSTALLED: 'You didn\'t install a software wallet extension, please download one of them and try again',

    // MESSAGES (SEE MY BALANCE FUNCTION)
    TEXT_TOKEN_NETWORK: 'Network: ',
    TEXT_TOKEN_ADDRESS: 'Token address: ',
    TEXT_TOKEN_NAME: 'Token name: ',
    TEXT_TOKEN_SYMBOL: 'Token symbol: ',
    TEXT_TOKEN_DECIMAL: 'Token decimals: ',
    TEXT_TOKEN_USER_BALANCE: 'Token user balance: '

});