import styled from 'styled-components';

export const Container = styled.div`
position: absolute;
margin-top: 100px;
width: 100%;
height: 270px;
bottom: 0px;
text-align: -webkit-center;

background: #1E2833;
`;

export const Content = styled.div`
width: 1120px;
display: flex;
left:186px;
right:186px;
top: 60px;
`;

export const Logo = styled.div`
position: absolute;
top: 60px;
bottom: 178.12;
@media (max-width: 560px) {
  left:80px;
}
`;

export const Divider = styled.div`
position: absolute;
margin-top: 140px;
right: 186px;
left: 186px;
height: 1px;

background: #FFFFFF;
mix-blend-mode: normal;
opacity: 0.1;
`;

export const LogoText = styled.div`
position: absolute;
top: 66px;
bottom: 187px;
margin-left: 50px;
@media (max-width: 560px) {
  left:80px;
}
`;

export const Text = styled.div `
margin-bottom: 59px;
margin-top: 191px;
margin-right: 39px;
transition: 0.5s;

font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 20px;
color: #FFFFFF;`;

export const Icons = styled.a `
position: absolute;
top: 190px;
bottom: 60px;
right:186px;
letter-spacing: 40px;

bottom: 178.12;
@media (max-width: 560px) {
  left:80px;
}`