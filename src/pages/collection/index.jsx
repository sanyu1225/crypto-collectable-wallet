import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@/components/Card';
import { fetchApi } from '@/utils/common';

const CollectionTitle = styled(Typography)`
  text-align: center;
`;

const ButtonWrap = styled('div')`
  position: fixed;
  bottom: 10px;
  width: 95%;
`;

const MuiButton = styled(Button)`
  width: 100%;
`;

export default function Collection() {
  const { query, push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  const backToHome = () => {
    push('/');
  };

  const getCollectionInfo = async () => {
    try {
      setLoading(true);
      const response = await fetchApi(`/api/collection?contract=${query.contract}&id=${query.id}`);
      setData(response);
    } catch (error) {
      console.warn(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // can use notifications alert error message
    if (!query.contract || !query.id) {
      backToHome();
      return;
    }
    getCollectionInfo();
  }, [query]);

  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      <CollectionTitle gutterBottom variant="h4" component="div">
        collection {`- ${data?.collection?.name}` || ''}
      </CollectionTitle>
      {data && (
        <>
          <Card width="100%" height="700px" imageHeight="500" imageUrl={data.image_url}>
            <Typography gutterBottom variant="h5" component="div">
              {data?.name}
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
              {data?.description}
            </Typography>
          </Card>
          <ButtonWrap>
            <MuiButton variant="contained" onClick={backToHome}>
              back
            </MuiButton>
          </ButtonWrap>
        </>
      )}
    </>
  );
}
