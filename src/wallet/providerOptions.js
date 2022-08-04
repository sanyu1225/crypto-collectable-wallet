import WalletConnect from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK,
    options: {
      appName: 'Crypto Collectable Wallet',
      infuraId: process.env.NEXT_PUBLIC_INFURA_KEY,
    },
  },
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_KEY,
    },
  },
};
