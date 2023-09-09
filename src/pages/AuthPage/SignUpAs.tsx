import { AiFillPlayCircle } from "react-icons/ai";
import { styled } from "styled-components";
import { Link, NavLink } from "react-router-dom";
// import img from "../../assets/logo1.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import GlobalButton2 from "../../components/Global/GlobalButton2";

const SignInAs = () => {
  const navigateBack = () => {
    window.history.back();
  };

  return (
    <Container>
      <Left>
        <Icon onClick={navigateBack}>
          <FaArrowLeftLong />
          <Descriptions className="hove">Go Back</Descriptions>
        </Icon>
        <NavLink to={"/"}>
          <Logo>SheCodes</Logo>
        </NavLink>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam eaque
          quasi ratione, rem sint labore dolore perferendis?
        </Text>

        <NavLink to="/tutor-sign-up">
          <Button bg="#f15a22" border="0" color="white">
            Sign Up as Tutor
          </Button>
        </NavLink>

        <Link style={{ textDecoration: "none" }} to={"/sign-up"}>
          <Button bg="transparent" border="1px solid #f15a22" color="#f15a22">
            Sign Up as Learner
          </Button>
        </Link>
      </Left>
      <Right>
        <FirstText>We are glad to see you again!</FirstText>
        <h3>
          Join our next negotiation <br /> group in few minutes!
        </h3>
        <Button1>
          <GlobalButton2 title="Watch demo" icon={<AiFillPlayCircle />} />
        </Button1>
        <BlurBackGround></BlurBackGround>
      </Right>
    </Container>
  );
};

export default SignInAs;
const Descriptions = styled.div`
  position: absolute;
  font-size: 12px;
  font-weight: bolder;
  padding: 3px 8px;
  min-width: 60px;
  background-color: #4b4b4bed;
  color: white;
  border-radius: 4px;
  bottom: -28px;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Button1 = styled.div`
  /* background-color: red; */
  z-index: 999;
`;

const Icon = styled.div`
  font-size: 20px;
  position: absolute;
  bottom: 6%;
  right: 43%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0, 0.6);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #f15a22;
  color: white;

  @media screen and (max-width: 800px) {
    top: 10%;
  }
  @media screen and (max-width: 500px) {
    width: 30px;
    font-size: 16px;
    top: 3%;
    left: 3%;
    height: 30px;
  }
  position: relative;
  &:hover .hove {
    display: flex;
  }
`;

const Button = styled.button<{ border: string; color: string; bg: string }>`
  padding: 25px 180px;
  margin: 20px;
  border-radius: 50px;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: 600;
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  font-size: 17px;

  @media screen and (max-width: 500px) {
    padding: 15px 70px;
  }
`;

const Text = styled.span`
  text-align: center;
  width: 550px;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 30px;
  color: rgb(0, 0, 0, 0.6);

  @media screen and (max-width: 500px) {
    width: 280px;
    font-size: 16px;
  }
`;

const Pic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
    height: fit-content;
    padding-bottom: 30px;
  }
`;
const Right = styled.div`
  background-image: url("https://harnishdesign.net/demo/html/oxyy/images/login-bg-2.jpg");
  width: 50%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  h3 {
    margin-left: 80px;
    z-index: 2;
    color: rgb(255, 255, 255);
    font-size: 40px;
    @media screen and (max-width: 800px) {
      margin-left: 30px;
      width: 320px;
    }
    @media screen and (max-width: 500px) {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 350px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Logo = styled.h2`
  font-size: 30px;
  margin-bottom: 50px;
  width: 180px;

  @media screen and (max-width: 500px) {
    margin-top: 0;
    margin-top: 25px;
    width: 150px;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: fit-content;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    padding-bottom: 30px;
  }
`;

const BlurBackGround = styled.div`
  position: absolute;
  color: white;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(10, 38, 69, 0.7);
`;
const FirstText = styled.span`
  z-index: 2;
  color: rgb(255, 255, 255);
  font-size: 20px;
  margin-left: 80px;
  margin-bottom: 15px;
  @media screen and (max-width: 800px) {
    margin-left: 30px;
    width: 300px;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 0;
    width: fit-content;
  }
`;
