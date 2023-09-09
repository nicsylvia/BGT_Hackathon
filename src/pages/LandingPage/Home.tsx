import React from 'react'
import styled from 'styled-components'
import {GoSearch} from "react-icons/go"
import girl from "../assets/girl-img-study.png"
import dot from "../assets/circle.svg"
import rect from "../assets/rect.png"

const Home = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Big>
            Learn more and make <br /> success the result of <br /> perfection.
            </Big>
            <Small>
            Pick from over 100,000 online video courses with new <br /> additions published every month.
            </Small>
            <InputHolder>
            <Input placeholder='Search your Favourite course'/>
            <Icon>
              <GoSearch/>
            </Icon>
            </InputHolder>
          </Left>
          <Right>
          <Img1 src={girl}/>
          <Img2 src={rect}/>
          <Img3 src={dot}/>
          </Right>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Home
const Img3= styled.img`
right: 30px;
position: absolute;
top:70px;
`
const Img2 = styled.img`
position: absolute;
width: 300px;
`

const Img1 = styled.img`
position: absolute;
width: 400px;
/* height: 500px; */
top: -5px;
left: 10px;
z-index: 2;
`
const Right = styled.div`
/* background-color: purple; */
height: 100%;
width: 50%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`

const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
width: 50px;
color: white;
background-color: orangered;
height: 100%;
`

const Input = styled.input`
width: 350px;
border: none;
outline: none;
height: 100%;
padding-left: 10px;
`

const InputHolder = styled.div`
display: flex;
height:40px;
width: 400px;
border: 1px solid silver;
align-items: center;
/* background-color: red; */
margin-top: 20px;
`

const Small = styled.div`
font-size: 20px;
font-weight: 400;
color: grey;
`

const Big = styled.div`
font-weight: 600;
font-size: 50px;
line-height: 1.1;
margin-bottom: 25px;
`


const Left = styled.div`
/* background-color: yellow; */
height: 100%;
width: 50%;
display: flex;
/* align-items: center; */
justify-content: center;
flex-direction: column;
`

const Wrapper  = styled.div`
/* background-color: red; */
width: 90%;
height: 600px;
display: flex;
align-items: center;
justify-content: center;
`

const Container = styled.div`
background-color: #FEF0EF;
width: 100%;
height: 900px;
display: flex;
align-items: center;
justify-content: center;
`