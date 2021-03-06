import styled from "styled-components";
import arrow from "../../Images/arrow.svg";
import btnBg from "../../Images/btn-bg.jpg";

export const InfoContainer = styled.section`
  position: relative;
  top: -50px;
`;

export const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  margin: 0 auto 0;
  padding: 36px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoTitle = styled.div`
  text-align: center;
`;

export const InfoHeadingShadow = styled.h1`
  font-size: 60px;
  letter-spacing: 3px;
  opacity: 0.4;
  background: -webkit-linear-gradient(#040d16, #ccc 75%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media screen and (max-width: 540px) {
    font-size: 40px;
  }
`;

export const InfoHeading = styled.h1`
  font-size: 48px;
  letter-spacing: 3px;
  color: #10375d;
  text-align: center;
  position: relative;
  top: -45px;

  @media screen and (max-width: 540px) {
    font-size: 32px;
    top: -32.5px;
  }
`;

export const InfoContent = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoText = styled.div`
  max-width: 600px;
  color: #020509;
  font-weight: 300;
  font-size: 20px;
  /* line-height: 2; */
  letter-spacing: 0.5px;

  @media screen and (max-width: 540px) {
    font-size: 16px;
    letter-spacing: 0;
  }
`;

export const InfoList = styled.ul`
  margin: 20px 0 0 20px;
  list-style: none url(${arrow});
`;

export const InfoListItems = styled.li`
  margin-top: 8px;
  padding-left: 20px;
`;

export const InfoImg = styled.img`
  margin-left: 20px;
  width: 500px;
  height: 300px;
  box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    margin: 20px 0 0 0;
  }

  @media screen and (max-width: 540px) {
    width: 300px;
  }
`;

export const InfoBtn = styled.div`
  margin-top: 25px;
  padding: 10px 25px;
  width: 150px;
  height: 42.5px;
  font-size: 18px;
  color: #020509;
  position: relative;
  background: transparent;
  box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  &:hover span:nth-child(1) {
    transform: scale(0);
    transition-delay: 0s;
  }

  &:hover span:nth-child(2) {
    opacity: 1;
    transform: scale(1);
    transition-delay: 0s;
  }

  &:before,
  &:after {
    content: "";
    width: 5px;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: #d3e5f8;
    transition: width 0.5s ease-in-out;
    transition-delay: 0.5s;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  &:hover:before,
  &:hover:after {
    transition: width 0.5s ease-in-out;
    transition-delay: 0s;
    width: 51%;
  }
`;

export const InfoBtnSpan1 = styled.span`
  position: absolute;
  z-index: 1;
  transition: 0.5s;
  transition-delay: 0.75s;
`;

export const InfoBtnSpan2 = styled.span`
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition: 0.5s;
  transition-delay: 0.5s;
  transform: scale(3);
  color: #10375d;
`;
