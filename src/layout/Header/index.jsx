import Button from '@mui/material/Button';
import { HeaderWrapper, Title } from './style';
import { useWallet } from '@/context/WalletContext';

export default function Header() {
  const { account, connectWallet, disconnect } = useWallet();

  return (
    <HeaderWrapper>
      <Title>Crypto Collectable Wallet</Title>
      {!account ? (
        <Button variant="contained" onClick={() => connectWallet()}>
          Connect wallet
        </Button>
      ) : (
        <Button variant="contained" onClick={disconnect}>
          Disconnect
        </Button>
      )}
    </HeaderWrapper>
  );
}
