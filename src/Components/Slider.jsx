import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@material-ui/icons/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
const Continer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({display:'none'})}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  top: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(-${(props) => props.translteIndex * 100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #${(props) => props.bg};
  transition: all 0.3s;
`;

const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 60px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleArrow = (arrow) => {
    if (arrow === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };
  return (
    <Continer>
      <Arrow direction="left" onClick={() => handleArrow("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper translteIndex={sliderIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleArrow("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Continer>
  );
};

export default Slider;
