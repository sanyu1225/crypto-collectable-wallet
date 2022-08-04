import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Button as MuiButton } from '@mui/material';

export const CollectionTitle = styled(Typography)`
  text-align: center;
`;

export const ButtonWrap = styled('div')`
  position:fixed;
  bottom:10px;
  width: 95%;
`;

export const Button = styled(MuiButton)`
  width: 100%;
`;
