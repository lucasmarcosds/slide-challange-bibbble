import styled from 'styled-components';

export const Grid = styled.div `
    justify-content: space-between;
    flex-direction: row;
    max-width: 1000px;
    flex-wrap: wrap;
    display: flex;`;

export const Container = styled.div`
justify-content: space-between;
margin-top:24px;
margin-bottom:24px;
margin-left:32px;
background: #FFFFFF;

width:259px;
height:416px;

border: 1px solid #DBDBDB;
border-radius: 4px;`;

export const CardImage = styled.div `
margin-top: 16px;
text-align: -webkit-center;

border-radius: 4px;`;

export const Title = styled.div `
margin-top: 12px;
margin-left: 24px;
transition: 0.5s;
text-align: -webkit-left;
max-size:16px;

font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.0275em;
color: #19191D;`;

export const Author = styled.div `
margin-bottom: 8px;
margin-top: 6px;
margin-left: 24px;
transition: 0.5s;
max-size:14px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 143%;

display: flex;
align-items: center;
letter-spacing: 0.018em;

color: #787885`;

export const Description = styled.div `
margin-left: 24px;
margin-right: 8px;
margin-top: 8px;
transition: 0.5s;
max-height: 41px;
text-overflow: ellipsis;
-webkit-line-clamp: 3;
white-space: nowrap;
overflow: hidden;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 143%

display: flex;
align-items: center;
letter-spacing: 0.018em;
color: #787885;`;

export const Infos = styled.div `
margin-top: 8px;
margin-left:24px
max-size:14px;
display: flex;
align-items: center;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 143%;

color: #2264D1;`

export const Button = styled.div `
height: 32px;
width: 75px;
border-radius: 4px;
padding: 5px;

max-height: 41px;
text-overflow: ellipsis;
-webkit-line-clamp: 3;
white-space: nowrap;
overflow: hidden;

margin-right: 65px;
margin-left: 24px;

background: #FFFFFF;
border: 1px solid #9DC2FF;`