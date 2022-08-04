import CssBaseline from '@material-ui/core/CssBaseline';
import { styled } from '@mui/material/styles';
import Header from './Header';

const ChildrenWrap = styled('div')`
  margin-top: 55px;
  height: calc(100vh - 55px);
  min-height: 100vh;
  background-repeat: no-repeat;
  background-image: radial-gradient(circle at 55% 44%, rgb(241, 249, 254), rgb(255, 255, 255) 91%);
}
`;

export default function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Header />
      <ChildrenWrap>{children}</ChildrenWrap>
    </>
  );
}
