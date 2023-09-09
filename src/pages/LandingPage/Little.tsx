import React from 'react'
import styled from 'styled-components'

interface iLittle{
    title?: string;
    text?: string;
    bc?: string;
    bg?: string;
    image?: any;
    pbg?: string;
}

const Little: React.FC<iLittle> = ({title, text, bc, bg, image, pbg}) => {
  return (
    <div> 
        <Container bc={`${bc}`} bg={`${bg}`}>

    <Pics pbg={`${pbg}`}>
        <Img src={image} />
    </Pics>
    
    <Title>{title} </Title>
    <Text> {text} </Text>
    
</Container></div>
  )
}

export default Little

const Img = styled.img`

`
const Text = styled.div`
font-size: 15px;
line-height: 1.5;
`

const Title = styled.div`
font-size: 20px;
margin: 15px 0;
`
const Pics = styled.div<{pbg: string}>`
width: 60px;
height: 60px;
background-color: ${({pbg}) => pbg};
display: flex;
justify-content: center;
align-items: center;

/* :hover{
    background-color: white;
} */
`
const Container = styled.div<{bg: string, bc: string}>`
    width: 240px;
    height: 250px;
    padding: 30px 20px;
    background-color: ${({bc}) => bc};
    border-radius: 5px;
    margin: 15px 0px;

   
    
    :hover{
        background-color: ${({bg}) => bg};
        .Pics{
        background-color: aliceblue;
    }
        cursor: pointer;
}
`
