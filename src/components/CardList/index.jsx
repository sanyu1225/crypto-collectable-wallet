import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import { GridWrap } from './style';
import Card from '@/components/Card';

export default function CardList({ data, setLastElement = () => {} }) {
  const { push } = useRouter();

  const openModal = (item) => {
    push({
      pathname: '/collection',
      query: { contract: item.asset_contract.address, id: item.token_id },
    });
  };

  return (
    <Grid container spacing={6} justifyContent="center" alignItems="center">
      {data.map((item, idx) => (
        <GridWrap item key={idx} ref={setLastElement}>
          <Card cardAction={() => openModal(item)} imageUrl={item.image_url}>
            <Typography gutterBottom variant="h5" component="div">
              {item?.name}
            </Typography>
          </Card>
        </GridWrap>
      ))}
    </Grid>
  );
}

CardList.propTypes = {
  data: PropTypes.array,
};

CardList.defaultProps = {
  data: [],
};
