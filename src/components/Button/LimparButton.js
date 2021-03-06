/* eslint-disable linebreak-style */
import styled from 'styled-components';
import Button from './index';

const LimparButton = styled(Button)`
  background-color: var(--blackLighter);
  border-color: var(--blackLighter);
  color: var(--grayDark);
  width: 180px;
  margin-left: 30px;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-left: 0px;
    margin-bottom: 15px;
    justify-content: center;
  }
`;

export default LimparButton;
