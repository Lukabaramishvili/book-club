import styled from 'styled-components';
import {ReactComponent as LogoSVG} from '../../assests/logo.svg';

export const Logo = styled(LogoSVG)`
  height: 40px;
  width: 270px;
  display: block;

  @media (max-width: 800px) {
    height: 33px;
    width: 222px;
  }
`;

export const HeaderContainer = styled.header`
  background: #ffbccc;
  border-bottom: 2px solid #000;
  padding: 20px 40px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  display: flex;
  position: flex;
  z-index: 3;

  @media (max-width: 800px) {
    padding: 20px;
  }
`;
