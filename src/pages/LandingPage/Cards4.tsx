import React from 'react'
import styled from 'styled-components'
import GlobalButton from '../../components/static/Desktop/GlobalButton';

interface iCard4{
    image?: any;
    title?: string;
    text?: string;
    text2?: string;
}

const Card4: React.FC<iCard4> = ({image, title, text, text2}) => {
  return (
    <div>
        <Container>
        <Pics src={image} />
        <Div>
            <Title> {title} 
                {/* Become a teacher */}
                </Title>
            <Text> {text}
                {/* Teach what you love. Coursector gives you the tools to create a course. */}
                </Text>
            <GlobalButton text={text2} width='200px'/>
        </Div>
        </Container>
    </div>
  )
}

export default Card4

const Text = styled.div`
margin-top: 15px;
font-size: 15px;
font-weight: 500;
margin-bottom: 20px;
`
const Title = styled.div`
font-size: 20px;
font-weight: 700;
`
const Div = styled.div`
margin-left:30px;
align-items: center;
`

const Pics = styled.img`
width: 70px;
height: 70px;
border-radius: 35px;
background-color: red;
`

const Container = styled.div`
    width: 550px;
    height: 150px;
    display: flex;
    background-color: white;
    padding: 20px;
    border-radius: 3px;
`