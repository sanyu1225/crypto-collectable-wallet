import Head from 'next/head';
import Button from '@mui/material/Button';
import Layout from '@/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Crypto Collectable Wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Button variant="contained">Contained</Button>
      </Layout>
    </>
  );
}
