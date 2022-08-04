import CircularProgress from '@mui/material/CircularProgress';
import { LoadingWrap } from './style';

export default function Progress() {
  return (
    <LoadingWrap>
      <CircularProgress />
    </LoadingWrap>
  );
}
