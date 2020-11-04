import styled from "styled-components";
import Mobilesunny from "../images/mobilesunny.jpg";
import Mobilecold from "../images/mobilecold.jpg";
import Mobilerain from "../images/mobilerainy.jpg";
import Mobilemist from "../images/mobilemist.jpg";
import Mobilesnow from "../images/mobilesnow.jpg";
import MobileThunder from "../images/mobilethunder.jpg";
import Desktopsunny from "../images/desktopsunny.jpg";
import Desktopcold from "../images/desktopcold.jpg";
import Desktopmist from "../images/desktopmist.jpg";
import Desktoprain from "../images/desktoprainy.jpg";
import Desktopsnow from "../images/desktopsnow.jpg";
import DesktopThunder from "../images/Desktopthunder.jpg";


interface Props {
  bg_weather: any;
}

export const Wrapper = styled.div`
  background-image: ${(props: Props) =>
    props.bg_weather === "Clouds"
      ? `url(${Desktopcold})`
      : props.bg_weather === "Clear"
      ? `url(${Desktopsunny})`
      : props.bg_weather === "Snow"
      ? `url(${Desktopsnow})`
      : props.bg_weather === "Mist"
      ? `url(${Desktopmist})`
      : props.bg_weather === "Rain"
      ? `url(${Desktoprain})`
      : `url(${DesktopThunder})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s linear;
  @media screen and (max-width: 1024px) {
    transition: 1s linear;
    background-image: ${(props: Props) =>
      props.bg_weather === "Clouds"
        ? `url(${Mobilecold})`
        : props.bg_weather === "Clear"
        ? `url(${Mobilesunny})`
        : props.bg_weather === "Snow"
        ? `url(${Mobilesnow})`
        : props.bg_weather === "Mist"
        ? `url(${Mobilemist})`
        : props.bg_weather === "Rain"
        ? `url(${Mobilerain})`
        : `url(${MobileThunder})`};
    justify-content: flex-start;
  }
`;

export const Input = styled.input`
  height: auto;
  width: auto;
  text-align: center;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 2px 2px #303033;
  font-size: 20px;
  transition: 0.4s ease-in-out;
  background-color: rgba(255, 255, 255, 0.5);
  &:focus {
    background-color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease-in-out;
  }
  @media screen and (max-width: 1024px) {
    border-radius: 0 0 16px 16px;
  }
`;

export const City = styled.h1`
  margin: 0 20px;
  padding: 0 20px;
  text-shadow: 2px 2px #303033;
  color: white;
  font-size: 32px;
  letter-spacing: 2px;
`;

export const DateTime = styled.h2`
  margin: 0 20px;
  padding: 0 20px;
  text-shadow: 1px 1px #303033;
  color: white;
  font-size: 18px;
  font-weight: lighter;
  font-style: italic;
`;

export const Celsius = styled.h2`
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 20px;
  text-shadow: 2px 2px #303033;
  color: white;
  font-size: 32px;
  box-shadow: 0px 2px 2px #303033;
`;

export const Weather = styled.h2`
  margin: 0 20px;
  padding: 0 20px;
  text-shadow: 2px 2px #303033;
  color: white;
  font-size: 32px;
`;
