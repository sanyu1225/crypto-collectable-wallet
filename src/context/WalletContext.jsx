import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { providerOptions } from '@/wallet/providerOptions';
import { toHex } from '@/utils/common';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [web3Modal, setWeb3Modal] = useState(null);

  useEffect(() => {
    const web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
    });
    setWeb3Modal(web3Modal);
  }, []);

  const [account, setAccount] = useState();
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [chainId, setChainId] = useState();
  const [network, setNetwork] = useState();

  const refreshState = () => {
    setAccount();
    setChainId();
    setNetwork('');
  };

  /** 連接錢包 */
  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setLibrary(library);
      setProvider(provider);
      if (accounts) setAccount(accounts[0]);
      setChainId(network.chainId);
    } catch (error) {
      console.warn('error: ', error);
    }
  };

  /** 斷開錢包連結 */
  const disconnect = async () => {
    if (!web3Modal) return;
    await web3Modal.clearCachedProvider();
    refreshState();
  };
  /** 切換網路 */
  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: toHex(4) }], // 4 = rinkeby測試網
      });
      setChainId(4);
    } catch (switchError) {
      console.warn('switchError: ', switchError);
    }
  };

  const value = useMemo(
    () => ({
      account,
      connectWallet,
      disconnect,
      switchNetwork,
      chainId,
      provider,
      network,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [account, web3Modal, chainId, provider, network]
  );

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

export const useWallet = () => useContext(WalletContext);
