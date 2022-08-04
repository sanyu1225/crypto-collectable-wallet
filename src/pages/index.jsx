import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CardList from '@/components/CardList';
import { useWallet } from '@/context/WalletContext';
import Layout from '@/layout';
import Progress from '@/components/Progress';
import { fetchApi } from '@/utils/common';

const TOTAL_PAGES = 5;

export default function Home() {
  const { account, chainId, switchNetwork } = useWallet();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [lastElement, setLastElement] = useState(null);

  const observer = useRef(null);

  const getCollection = async () => {
    try {
      if (!account || chainId !== 4) return;
      setLoading(true);
      const response = await fetchApi(`/api/assets?owner=${account}&offset=0`);
      const allData = new Set([...data, ...response.assets]);
      setData([...allData]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    /** isClient */
    if (typeof window !== 'undefined') {
      observer.current = new IntersectionObserver((entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setPageNum((no) => no + 1);
        }
      });
    }
  }, []);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  useEffect(() => {
    if (pageNum <= TOTAL_PAGES) {
      getCollection();
    }
  }, [pageNum]);

  useEffect(() => {
    if (!account || chainId !== 4) return;
    getCollection();
  }, [account, chainId]);

  return (
    <>
      <Head>
        <title>Crypto Collectable Wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {!!account && chainId !== 4 ? (
          // 引導用戶切rpc
          <Alert severity="warning">
            Please Switch to Rinkeby TestNet! <Button onClick={switchNetwork}>switch</Button>
          </Alert>
        ) : null}
        <CardList data={data || []} setLastElement={setLastElement} />

        {loading && <Progress />}
      </Layout>
    </>
  );
}
