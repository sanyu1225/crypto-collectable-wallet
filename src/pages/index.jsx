import Head from 'next/head';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import Layout from '@/layout';
import { useWallet } from '@/context/WalletContext';

export default function Home() {
  const { account, chainId, switchNetwork } = useWallet();

  return (
    <>
      <Head>
        <title>Crypto Collectable Wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {!!account && chainId !== 4 ? (
          <Alert severity="warning">
            Please Switch to Rinkeby TestNet! <Button onClick={switchNetwork}>switch</Button>
          </Alert>
        ) : null}

        <p>Account: {account} </p>
        <p>Chain ID: {chainId}</p>

        <Button variant="contained">{account || ' none '}</Button>
      </Layout>
    </>
  );
}
