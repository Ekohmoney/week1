import {ethers} from 'ethers';

const mnemonic: string = 'hedgehog profit enact brick print junk twist fragile obvious post uncover skate';

ethers.Wallet.fromPhrase
const wallet = ethers.Wallet.fromPhrase(mnemonic);
console.log(wallet);