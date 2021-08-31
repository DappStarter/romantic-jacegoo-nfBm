require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember equip gloom clinic swift team'; 
let testAccounts = [
"0xc27a782d84d8ff01c3990b918d39e4c90bf859b6b0de5ad15a879f4dd7bf4002",
"0xb34bfc130634a2bc006f9787959d70e3aa01e2665fcb4ea525b405ba2526b957",
"0x842a04d3c6dc57e4ec284e62014d82bbc1d32b19eb2042ba40c593302837dacc",
"0x250b0911ce85c41a94191f4acbde6494059a2dbe2e7b01d56c785292ab870814",
"0xff48617d9febf1641872a31689a333eff8721c915ea826fe7c1276afd800f063",
"0xff64a32e8a23e6d92dc2df5ea71c0dfe15d062a818f48128de362e15b0bdf757",
"0x59099c0d5a2d826465a829fe0cd7950cbde5dfe15d8c81b248c9a4dfa105eaf2",
"0x78f2a6b328c8db88a59ae2a4636a570344bf48f83afcd8ec613dee5eb2a71b33",
"0xfdcd2f60802d392337c21e7ec473620ba287688c2a7a76cfdab49d213d5b6237",
"0xf9c854d77304664ac47c10d8a414bfd6e282ec91e18fd049928f80c8dc611be3"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

