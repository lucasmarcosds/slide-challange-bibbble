import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #CCCCCC;
  
`;

export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Logo = styled.div`
position: absolute;
width: 130.79px;
height: 32px;
left: 154px;
top: 34px;
`;

export const Icon = styled.a`
position: absolute;
top: 45px;
left: 1141px;
text-align: -webkit-right;`;

export const MenuText = styled.a `
position: absolute;
width: 553px;
height: 16px;
left: 527.5px;
top: 42px;

font-weight: 400;
font-size: 14px;
line-height: 16px;
`

export const NavLinks = styled.nav`
position: absolute;
width: 553px;
height: 16px;
left: 527.5px;
align-items: center;
top: 42px;
  display: flex;
  gap: 20px;
  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #1E2833;
    position: fixed;
    height: 100%;
    gap: 0px;
    top: 0px;
    right: 0px;
    width: 60%;
    right: ${props => props.sidebard ? '0' : '-100%'};
    transition: 0.5s;
    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export const MenuLink = styled.a`
  align-items: center;
  display:flex;
  font-family: 'Roboto', 'Inter', sans-serif;
  font-size: 14px;
  transition: 0.5s;
  &.active {
    font-weight: 700;;
  }
  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }`
;