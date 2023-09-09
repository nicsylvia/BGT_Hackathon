import styled from 'styled-components'
import Card2 from './Card2'
import img2 from "../assets/crd-img4.jpg"
import img3 from "../assets/crd-img3.jpg"
import img from "../assets/crd-img2.jpg"
import img4 from "../assets/profile-img1.jpg"
import img5 from "../assets/profile-img2.jpg"
import img6 from "../assets/profile-img3.jpg"
import {BsArrowBarLeft} from "react-icons/bs"
import {BsArrowBarRight} from "react-icons/bs"
import GlobalButton from '../../components/static/Desktop/GlobalButton'

const Third = () => {
  return (
    <div>
        <Container>
        <Main>
        <Tholder>
            <Title>Get choice of your course</Title>
            <GlobalButton text='View All' width='100px' />
            </Tholder>
        <CardHolder>
        <Card2 
        n1={20}
        n2={21}
        n3={550}
        title='Learn Phython Programming Beginner'
        name='Perry Joseph'
        n4={200.00}
        n5={150.00}
        image1={img}
        image2={img4}
        />
        <Card2 
        n1={20}
        n2={21}
        n3={550}
        title='Learn Phython Programming Beginner'
        name='Perry Joseph'
        n4={200.00}
        n5={150.00}
        image1={img2}
        image2={img5}
        />
        <Card2 
        n1={20}
        n2={21}
        n3={550}
        title='Learn Phython Programming Beginner'
        name='Perry Joseph'
        n4={200.00}
        n5={150.00}
        image1={img3}
        image2={img6}
        />
        </CardHolder>
        <LineHolder>
            <Box> <BsArrowBarLeft /> </Box>
            <Line bg='orangered'></Line>
            <Line bg='white'></Line>
            <Box> <BsArrowBarRight /> </Box>
        </LineHolder>
        </Main>
        </Container>
    </div>
  )
}
export default Third

const Line = styled.div<{bg: string}>`
width: 520px;
background-color: ${({bg}) => bg};
height: 3px;
border-radius: 4px;
`

const Box = styled.div`
width: 50px;
height: 50px;
background-color: white;
font-size: 25px;
display: flex;
justify-content: center;
align-items: center;
`

const LineHolder = styled.div`
display: flex;
    align-items: center;
    margin-bottom: 55px;
    justify-content: space-between;
`

const CardHolder = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled.div`
font-size: 35px;
/* font-weight: 700; */
`
const Tholder = styled.div`
display: flex;
justify-content: space-between;
margin-top: 70px;
margin-bottom: 40px;
`

const Main = styled.div`
display: flex;
justify-content: center;
width: 90%;
flex-direction: column;
`
const Container = styled.div`
background-color: #EFEFF6;
display: flex;
justify-content: center;
width: 100%;
`