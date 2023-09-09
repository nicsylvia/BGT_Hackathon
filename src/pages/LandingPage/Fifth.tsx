import styled from "styled-components";
import { BsCheck2Square } from "react-icons/bs";
import GlobalButton from "../../components/static/Desktop/GlobalButton";
import img from "../../assets/know-about.png";

const Fifth = () => {
  return (
    <div>
      <Container>
        <Main>
          <Left>
            <Title>Get more close with your courses.</Title>
            <Text>
              We provide a wide range of courses for the different sectors you
              can choose from, which suits you perfectly
            </Text>
            <Div>
              <Icon>
                {" "}
                <BsCheck2Square />
              </Icon>
              <Text2>Detail description of each course</Text2>
            </Div>
            <Div>
              <Icon>
                {" "}
                <BsCheck2Square />
              </Icon>
              <Text2>Easy to understand language Image Description</Text2>
            </Div>
            <Div>
              <Icon>
                {" "}
                <BsCheck2Square />
              </Icon>
              <Text2>Simple and easy to learn courses.</Text2>
            </Div>
            <GlobalButton text="Start Learning Now" width="200px" />
          </Left>
          <Right>
            <Pics src={img} />
          </Right>
        </Main>
      </Container>
    </div>
  );
};

export default Fifth;

const Pics = styled.img`
  width: 500px;
  height: 600px;
  object-fit: cover;
`;
const Text2 = styled.div`
  font-size: 15px;
  margin-left: 20px;
  font-weight: 500;
`;

const Icon = styled.div`
  font-size: 25px;
  color: green;
`;

const Div = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  margin-bottom: 25px;
`;
const Text = styled.div`
  font-size: 23px;
  margin: 30px 0;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
`;
const Right = styled.div`
  width: 50%;
`;

const Left = styled.div`
  width: 50%;
`;

const Main = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 800px;
  background-color: white;
  width: 100%;
`;
