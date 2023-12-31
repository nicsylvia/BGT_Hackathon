import styled from "styled-components";
import { Link } from "react-router-dom";
const Quiz3 = () => {
  return (
    <div>
      <Container>
        <CardHold>
          {/* <Content> */}
          <HeaderText>Question 3</HeaderText>
          <Question>What serves as the structure of the web page?</Question>
          <InputHold>
            <Input type="radio" />
            <Text>JAVASCRIPT</Text>
          </InputHold>
          <InputHold>
            <Input type="radio" />
            <Text>HMTL/CSS</Text>
          </InputHold>
          <InputHold>
            <Input type="radio" />
            <Text>UI/UX</Text>
          </InputHold>
          <InputHold>
            <Input type="radio" />
            <Text>PHP</Text>
          </InputHold>
          {/* </Content> */}
        </CardHold>
        <ButtonHold>
          <Link to="/game/next1">
            <Button2>Prev</Button2>
          </Link>
          <Link to="/leaderboard">
            <Button>Submit</Button>
          </Link>
        </ButtonHold>
      </Container>
    </div>
  );
};

export default Quiz3;
const Button = styled.button`
  background-color: #0d71fa;
  color: white;
  width: 100px;
  height: 50px;
`;
const Button2 = styled.button`
  color: #0d71fa;
  background-color: white;
  width: 100px;
  height: 50px;
`;

const ButtonHold = styled.div`
  width: 90%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  margin-left: 10px;
`;

const Input = styled.input`
  width: 20px;
  height: 20px;
`;

const InputHold = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
`;

const Question = styled.div`
  font-weight: 800;
  font-size: 25px;
  margin-bottom: 20px;
`;

const HeaderText = styled.div`
  font-weight: bold;
  font-size: 45px;
  font-style: italic;
  margin-bottom: 30px;
`;

// const Content = styled.div``;

const CardHold = styled.div`
  width: 90%;
  height: 60vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fef0ef;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
