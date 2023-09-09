import React from 'react'
import styled from 'styled-components'
import {BsStar} from "react-icons/bs"
import {BsEye} from "react-icons/bs"
import {BsPlayBtn} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"

interface iCard2{
    n1?: number;
    n2?: number;
    n3?: number;
    title?: string;
    name?: string;
    n4?: number;
    n5?: number;
    image1?: any
    image2?: any
}

const Card2: React.FC<iCard2> = ({n1, n2, n3, n4, n5, title,name, image1, image2}) => {
  return (
    <div>
        <Container>
            <PicsHolder>
                <Img src={image1} />
                <Icon2> <AiOutlineHeart /> </Icon2>
            </PicsHolder>
            <Div>
                <Num1>
                    <ICon>
                        <BsStar />
                    </ICon>
                    <Nums>{n1}</Nums>
                </Num1>
                <Num1>
                    <ICon> <BsEye /> </ICon>
                    <Nums> {n2} </Nums>
                </Num1>
                <Num1>
                    <ICon> <BsPlayBtn /> </ICon>
                    <Nums> {n3} </Nums>
                </Num1>
            </Div>
            <Line></Line>
            <Title>{title}</Title>
            <Div2>
                <PicsHolder2>
                    <Img2  src={image2}/>
                    <Name> {name} </Name>
                </PicsHolder2>
                <Numbers>
                    <N1> {n4} </N1>
                    <N2> {n5} </N2>
                </Numbers>
            </Div2>

        </Container>
    </div>
  )
}

export default Card2

const N2 = styled.div`
color: orangered;
font-size: 20px;
font-weight: 700;
margin-left: 10px;
`

const N1 = styled.div`
font-size: 19px;
margin-top: 1px;
`

const Numbers = styled.div`
display: flex;
align-items: center;
`

const Name = styled.div`
margin-left: 5px;
/* font-size: 15px;
font-weight: 700; */
`

const Img2 = styled.img`
width: 40px;
height: 40px;
background-color: red;
border-radius: 5px;
`

const PicsHolder2 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Div2 = styled.div`
display: flex;
justify-content: space-between;
/* align-items: center; */
width: 100%;
margin-top: 20px;
`
const Title = styled.div`
font-size: 25px;
font-weight: 500;
margin-top: 15px;
`
const Line = styled.div`
width: 100%;
height: 1px;
background-color: #787777;
margin-top: -30px;
`
const Nums = styled.div`
font-size: 15px;
margin-left: -35px;
`

const ICon = styled.div`
width: 60px;
height: 60px;
color: orange;
/* background-color: black; */
`
const Num1 = styled.div`
display: flex;
/* align-items: center; */
`
const Div = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    width: 100%;
    margin-top: 15px;
`
const Icon2 = styled.div`
    font-size: 30px;
    position: absolute;
    color: White;
    top: 0;
    right: 0;
    margin: 10px 10px;
`
const Img = styled.img`
object-fit: cover;
height: 200px;
width: 350px;
`
const PicsHolder = styled.div`
width: 350px;
height: 200px;
background-color: red;
border-radius: 5px;
position: relative;
`

const Container = styled.div`
padding: 15px;
    width: 350px;
    min-height: 350px;
    background-color: white;
    display: flex;
   align-items: center;
    border-radius: 5px;
    flex-direction: column;
    margin-bottom: 70px;
`