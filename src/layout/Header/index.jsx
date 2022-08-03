import Button from '@mui/material/Button';
import { HeaderWrapper, Title } from './style';

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>Crypto Collectable Wallet</Title>
      <Button variant="contained">Connect wallet</Button>
    </HeaderWrapper>
  );
}
