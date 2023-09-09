import styled from 'styled-components'
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsGoogle} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>
          <Div>
            <Div2>
            <Title>Home</Title>
            <Text>Home v1</Text>
            <Text>Home v2</Text>
            <Text>Home v3</Text>
            </Div2>
            <Div2>
            <Title>Courses</Title>
            <Text>All Courses
</Text>
            <Text>Design</Text>
            <Text>Development</Text>
            <Text>Marketing</Text>
            <Text>Photography</Text>
            </Div2>
            <Div2>
            <Title>Pages</Title>
            <Text>Blog</Text>
            <Text>Blog Detail</Text>
            <Text>Courses</Text>
            <Text>contact us</Text>
            <Text>Teacher Profile</Text>
            <Text>404 page</Text>
            </Div2>
            <Div2>
            <Title>Features</Title>
            <Text>Course Detail V1</Text>
            <Text>Course Detail V2</Text>
            </Div2>
          </Div>
          <Line></Line>
          <Div3>
            <Text>2021 Skilify Education Private Limited. All rights reserved</Text>
            <Icons>
              <Icon> <BsFacebook /> </Icon>
              <Icon> <BsTwitter /> </Icon>
              <Icon> <BsGoogle /> </Icon>
              <Icon> <BsLinkedin /> </Icon>
            </Icons>
          </Div3>
        </Main>
      </Container>
    </div>
  )
}

export default Footer

const Icon = styled.div`
margin-right: 20px;
color: #afa9a9;
font-size: 25px;
`
const Icons = styled.div`
display: flex;
`
const Div3 = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`
const Line = styled.div`
width: 100%;
height: 1px;
margin-top: 40px;
margin-bottom: 10px;
background-color: #afa9a9;
`

const Text = styled.div`
font-size: 17px;
margin-bottom: 20px;
color: #afa9a9;
font-weight: 500;
`
const Title = styled.div`
font-size: 25px;
font-weight: 700;
color: white;
margin-bottom: 30px;
`
const Div2 = styled.div`
margin-right: 184px;
`
const Div = styled.div`
display: flex;
width: 100%;
`

const Main = styled.div`
width: 90%;
/* justify-content: space-between;
display: flex; */
`
const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  background-color: #33333D;
  padding-top: 70px;
  padding-bottom: 10px;
`