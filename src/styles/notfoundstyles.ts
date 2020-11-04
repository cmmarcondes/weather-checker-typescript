import styled from 'styled-components';
import NotFound from "../images/notfound.jpg";
import NotFoundMobile from "../images/notfoundmobile.jpg";

export const NotFoundContainer = styled.div`
  background-image: url(${NotFound});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  transition: 1s linear;
  @media screen and (max-width: 1024px){
    background-image: url(${NotFoundMobile});
    justify-content: center;
    align-items: center;
  }
`;

export const BoxText = styled.div`
  margin: 20px;
  width: 40vw;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 20px;
  text-shadow: 2px 2px #303033;
  color: white;
  font-size: 60px;
  box-shadow: 0px 2px 2px #303033;
  @media screen and (max-width: 1024px){
      width: 80%;
      font-size: 40px;
  }
`;


export const Redirectioner = styled.h2`
  margin: 0 20px;
  padding: 0 20px;
  text-shadow: 2px 2px #303033;
  color: white;
  font-size: 40px;
  font-weight: lighter;
  @media screen and (max-width: 1024px){
      font-size: 30px;
  }
`;

export const FourOFour = styled.h1`
  margin: 0 20px;
  padding: 0 20px;
  text-shadow: 4px 4px #303033;
  color: white;
  font-size: 80px;
  letter-spacing: 2px;
`;