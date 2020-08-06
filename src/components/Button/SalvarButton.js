/* eslint-disable linebreak-style */
import styled from 'styled-components';
import Button from './index';

const SalvarButton = styled(Button)`
  background-color: var(--primary);
  border-color: var(--primary);
  color: var(--white);
  width: 180px;
  @media (max-width: 800px) {
    display: flex;
    width: 100%;
    flex-direction: row;
  }
`;

export default SalvarButton;
