import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { styled } from "styled-components";

interface iButton2 {
  title: string;
  icon: any;
}

const GlobalButton2: React.FC<iButton2> = ({ title, icon }) => {
  return (
    <div>
      <LeftButton>
        <Video>{icon}</Video>
        {title}
      </LeftButton>
    </div>
  );
};

export default GlobalButton2;

const LeftButton = styled.button`
  margin-left: 80px;
  width: 210px;
  height: 50px;
  border: 1px solid white;
  background-color: transparent;
  z-index: 1;
  color: white;
  cursor: pointer;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 20px;
  transition: all 400ms;
  &:hover {
    background-color: white;
    color: black;
    border: 0;
  }
  @media screen and (max-width: 800px) {
    margin-left: 30px;
  }
`;

const Video = styled.div`
  margin-top: 3px;
  margin-right: 5px;
  font-size: 20px;
`;
