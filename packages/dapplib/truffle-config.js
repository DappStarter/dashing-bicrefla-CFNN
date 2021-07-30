require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note meadow cluster include clinic only secret'; 
let testAccounts = [
"0x32b6e58b56c4839eab5dd0a0dd682fdae252528f3458a7a58d646f9e52ba5169",
"0x30cc07b6365284545a1d041074b4d05fd9bbae6efb46656a66a84cb992f9d00b",
"0x0042bcaeef4d1edb024900522998692a64cdb171b8ac6efc6d564e010ff38901",
"0x94612d7598a7e56226384e79aaae52d875469e0e4f7fff83794bbaf0796a5e20",
"0xb7cc0fb14447f08e30e78bca26ca8f3056178c57de201bafa52d90cd5c03a4f9",
"0xe087ac654d00e884ddd56340ddc3e723e3ef14819e9b486592a5c5952cc2dc70",
"0x22456e62f2205043847aeef6170d47c6a4cc5b79e432de3af15833de13fbb88f",
"0x57e538a3711876a31ecb427bfb97637cfcba66ebde5a77bcf5f096c3c5b68900",
"0x60b38e473ff307c6d3fd954bb3e5d645dc628015d6bd473b9a78b215245f8e4a",
"0x7f9c71ee8f52ce7111453a54635cf738f95cd6f8fded2c71d94281def80f898e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


