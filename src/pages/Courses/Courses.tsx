import { useState } from "react";
import styled from "styled-components";
import search from "../../assets/search-white.svg";

const Courses = () => {
  const [showwomen, setShowwomen] = useState<Boolean>(true);
  const [showmen, setshowmen] = useState<Boolean>(false);
  const [showkids, setshowkids] = useState<Boolean>(false);
  const [showsports, setShowsports] = useState<Boolean>(false);
  const [showbeauty, setShowbeauty] = useState<Boolean>(false);
  const [showjewelry, setShowjewelry] = useState<Boolean>(false);

  const togglewomen = () => {
    setShowwomen(true);
    setshowmen(false);
    setshowkids(false);
    setShowsports(false);
    setShowbeauty(false);
    setShowjewelry(false);
  };

  const togglemen = () => {
    setShowwomen(false);
    setshowmen(true);
    setshowkids(false);
    setShowsports(false);
    setShowbeauty(false);
    setShowjewelry(false);
  };

  const togglekids = () => {
    setShowwomen(false);
    setshowmen(false);
    setshowkids(true);
    setShowsports(false);
    setShowbeauty(false);
    setShowjewelry(false);
  };

  const togglesports = () => {
    setShowwomen(false);
    setshowmen(false);
    setshowkids(false);
    setShowsports(true);
    setShowbeauty(false);
    setShowjewelry(false);
  };

  const togglebeauty = () => {
    setShowwomen(false);
    setshowmen(false);
    setshowkids(false);
    setShowsports(false);
    setShowbeauty(true);
    setShowjewelry(false);
  };

  const togglejewelry = () => {
    setShowwomen(false);
    setshowmen(false);
    setshowkids(false);
    setShowsports(false);
    setShowbeauty(false);
    setShowjewelry(true);
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <P>Courses</P>
          <Input>
            <input type="text" placeholder="Search your Favourite Course" />
            <div>
              <img src={search} alt="" />
            </div>
          </Input>
        </Wrapper>
      </Container>
      <Wrapper2>
        <h1>All Courses.</h1>
        <Category>
          <Div onClick={togglewomen} bcc={showwomen ? "bcc" : ""}>
            All
          </Div>
          <Div onClick={togglemen} bcc={showmen ? "bcc" : ""}>
            Design
          </Div>
          <Div onClick={togglekids} bcc={showkids ? "bcc" : ""}>
            Development
          </Div>
          <Div onClick={togglesports} bcc={showsports ? "bcc" : ""}>
            Marketing
          </Div>
          <Div onClick={togglebeauty} bcc={showbeauty ? "bcc" : ""}>
            Frontend
          </Div>
          <Div onClick={togglejewelry} bcc={showjewelry ? "bcc" : ""}>
            Backend
          </Div>
        </Category>
      </Wrapper2>
    </div>
  );
};

export default Courses;

const Container = styled.div`
  width: 100%;
  height: 250px;
  background-color: #efeff6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 500px;
`;
const P = styled.div`
  width: 20%;
  height: 50%;
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #33333d;
`;
const Input = styled.div`
  width: 60%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #e65750; */
  input {
    width: 80%;
    height: 70%;
    border: 0;
    outline: 0;
    padding-left: 10px;
    border: 0;
    border-radius: 5px;

    &:focus {
      outline: none;
      border-width: 2px;
      border-color: #33333d;
    }
    div {
      width: 20%;
      height: 70%;
      background-color: #e65750;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
const Div = styled.div<{ bcc: string }>`
  width: 150px;
  /* height: 50px; */
  border-radius: 30px;
  padding: 10px 15px 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  span {
    margin-right: 10px;
    font-size: 25px;
  }
  background-color: ${({ bcc }) => (bcc ? "#0F172A" : "")};
  color: ${({ bcc }) => (bcc ? "#fff" : "")};
`;
const Category = styled.div`
  width: 800px;
  height: 50px;
  padding: 5px 0px 5px 0px;
  background-color: #fff;
  border-radius: 40px;
  color: #0f172a;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper2 = styled.div`
  width: 90%;
  padding: 40px 0px 40px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
