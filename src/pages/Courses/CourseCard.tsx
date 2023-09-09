import styled from "styled-components";
import img from "../../assets/man1.png";
import img2 from "../../assets//green.png";
import img3 from "../../assets/product.png";
import img4 from "../../assets/business.png";
import img5 from "../../assets/lap.png";
import img6 from "../../assets/cloud.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const CourseCard = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/view-courses">
      <Container>
        <Text>
          Get Reliable Sources here
          <br />
          to get you started
        </Text>
        <P>Discover the right Virtual Experience Program for you</P>
        <Wrapper>
          <Box>
            <Up>
              <Img src={img} />
            </Up>
            <Down>
              <Data>
                I am interested in
                <br />
                <span>Design</span> and <span>UI/UX</span>
              </Data>
              <View>
                View Courses
                <Icon>
                  <AiOutlineArrowRight />
                </Icon>
              </View>
            </Down>
          </Box>

          <Box>
            <Up>
              <Img src={img2} />
            </Up>
            <Down2>
              <Data>
                I am interested in
                <br />
                <span>Design</span> and <span>Creatives</span>
              </Data>
              <View>
                View Courses
                <Icon>
                  <AiOutlineArrowRight />
                </Icon>
              </View>
            </Down2>
          </Box>
          <Box>
            <Up>
              <Img src={img3} />
            </Up>
            <Down3>
              <Data>
                I am interested in
                <br />
                <span>Marketing</span>
              </Data>
              <View>
                View Courses
                <Icon>
                  <AiOutlineArrowRight />
                </Icon>
              </View>
            </Down3>
          </Box>
          <Box2>
            <Up>
              <Img src={img4} />
            </Up>
            <Down4>
              <Data>
                I am interested in
                <br />
                <span>Development</span>
              </Data>
              <View>
                View Courses
                <Icon>
                  <AiOutlineArrowRight />
                </Icon>
              </View>
            </Down4>
          </Box2>
          <Box2>
            <Up>
              <Img src={img5} />
            </Up>
            <Down5>
              <Data>
                I am interested in
                <br />
                <span>Frontend Development</span>
              </Data>
              <View>
                View Courses
                <Icon>
                  <AiOutlineArrowRight />
                </Icon>
              </View>
            </Down5>
          </Box2>
          <Box2>
            <Up>
              <Img src={img6} />
            </Up>
            <Down6>
              <Data>
                I am interested in
                <br />
                <span>Backend Development</span>
              </Data>
              <View>
                View Courses
                <Icon>
                  <AiOutlineArrowRight />
                </Icon>
              </View>
            </Down6>
          </Box2>
        </Wrapper>
      </Container>
    </Link>
  );
};

export default CourseCard;

const Icon = styled.div`
  margin-left: 25px;
  margin-top: 5px;
`;
const View = styled.div`
  line-height: 1.75rem;
  font-size: 1.125rem;
  display: flex;
  margin-top: 20px;
`;
const Data = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  span {
    font-weight: bolder;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
const Down = styled.div`
  width: 100%;
  height: 50%;
  background-color: #050794;
  display: flex;
  padding-top: 40px;
  padding-left: 40px;
  color: white;
  flex-direction: column;
  position: relative;
`;
const Down2 = styled.div`
  width: 100%;
  height: 50%;
  background-color: #0c8f54;
  display: flex;
  padding-top: 40px;
  padding-left: 40px;
  color: white;
  flex-direction: column;
  position: relative;
`;
const Down3 = styled.div`
  width: 100%;
  height: 50%;
  background-color: #7c01a7;
  display: flex;
  padding-top: 40px;
  padding-left: 40px;
  color: white;
  flex-direction: column;
`;
const Down4 = styled.div`
  width: 100%;
  height: 50%;
  background-color: #a78700;
  display: flex;
  padding-top: 40px;
  padding-left: 40px;
  color: white;
  flex-direction: column;
`;
const Down5 = styled.div`
  width: 100%;
  height: 50%;
  background-color: #a74f46;
  display: flex;
  padding-top: 40px;
  padding-left: 40px;
  color: white;
  flex-direction: column;
  position: relative;
`;
const Down6 = styled.div`
  width: 100%;
  height: 50%;
  background-color: #0e8f8f;
  display: flex;
  padding-top: 40px;
  padding-left: 40px;
  color: white;
  flex-direction: column;
`;
const Img = styled.img`
  transition: all 350ms;
  object-fit: cover;
  cursor: pointer;
  :hover {
    display: block;
    transform: scale(1.1);
    background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.9));
    z-index: 1;
    filter: grayscale(3);
  }
`;
const Up = styled.div`
  width: 100%;
  height: 50%;
  overflow: hidden;
  :hover {
  }
`;
const Box = styled.div`
  width: 30%;
  height: 420px;
  overflow: hidden;
  border-radius: 10px;
  margin: 5px;
`;
const Box2 = styled.div`
  width: 30%;
  height: 420px;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 40px;
`;
const P = styled.div`
  font-size: 20px;
  width: 100%;
  line-height: 1.75rem;
  text-align: center;
  color: #33333d;
  margin-top: 8px;
`;
const Text = styled.h2`
  font-weight: 600;
  text-align: center;
  line-height: 1.25;
  font-size: 3rem;
  color: #fca5a5;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;

  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  padding-bottom: 90px;
`;
