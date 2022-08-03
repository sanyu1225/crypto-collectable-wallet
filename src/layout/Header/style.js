import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const HeaderWrapper = styled('header')`
  height: 55px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const Title = styled('p')`
  margin: 0;
  font-size: 1.5rem;
  color: rgb(20, 20, 20);
  text-align: center;
`;
