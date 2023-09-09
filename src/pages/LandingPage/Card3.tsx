import React from 'react'
import styled from 'styled-components'
import {BsStar} from "react-icons/bs"

interface iCard3{
    image?: any;
    name?: string;
    text?: string;
}

const Card3: React.FC<iCard3> = ({image, name, text}) => {
  return (
    <div>
        <Container>
            <Div>
                <PicHolder>
                    <Pics src={image} />
                    <NameHolder>
                        <Name> {name} </Name>
                        <Student>
                            student
                            <Icon>
                                <Icons> <BsStar /></Icons>
                                <Icons> <BsStar /></Icons>
                                <Icons> <BsStar /></Icons>
                                <Icons> <BsStar /></Icons>
                                <Icons> <BsStar /></Icons>
                            </Icon>
                        </Student>
                    </NameHolder>
                </PicHolder>
            </Div>
                <Text>
                    {/* i will tell all people to register in skylife now as they offer the best courses at afordable prices */}
                    {text}
                </Text>

        </Container>
    </div>
  )
}

export default Card3

const Text = styled.i`
margin-top: 20px;
font-size: 17px;
font-weight: 500;
`
const Icons = styled.div`
font-size: 20px;
color: orange;
margin-left: 5px;
`
const Icon = styled.div`
display: flex;
`

const Student = styled.div`
  display: flex;
  justify-content: space-between;
  width: 480px;
  margin-top: 10px;
`
const Name = styled.div`
font-size: 20px;
font-weight: 700;
color: #646464;
`

const NameHolder = styled.div`
margin-left: 10px;
`

const Pics = styled.img`
width: 60px;
height: 60px;
border-radius: 30px;
`

const PicHolder = styled.div`
display: flex;
`
const Div = styled.div`
display: flex;
`

const Container = styled.div`
    width: 550px;
    height: 150px;
    background-color: #F9F9FB;
    border-top-right-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: #979798;
`