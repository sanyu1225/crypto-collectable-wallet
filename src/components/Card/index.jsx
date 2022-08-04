import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardWrap from '@mui/material/Card';

export default function Card({
  imageUrl = '',
  imageHeight = '200',
  width = 400,
  height = 300,
  cardAction = () => {},
  children,
}) {
  return (
    <CardWrap sx={{ width, height }} onClick={cardAction}>
      <CardMedia component="img" height={imageHeight} image={imageUrl} />
      <CardContent>{children}</CardContent>
    </CardWrap>
  );
}
