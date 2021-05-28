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
  padding: 20px 40px;
  border-bottom: 2px solid black;
  position: fixed;
  z-index: 2;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;

  @media (max-width: 800px) {
    padding: 20px;
  }
`;
