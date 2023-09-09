import styled from 'styled-components'
import {BsArrowBarLeft} from "react-icons/bs"
import {BsArrowBarRight} from "react-icons/bs"
import Card3 from './Card3'
import img from "../../assets/circle1.png"
import img2 from "../../assets/circle2.png"

const Sixth = () => {
  return (
    <div>
        <Container>
            <Main>
                <Div>
                <Title>What our students have to say</Title>

                <LineHolder>
            <Box> <BsArrowBarLeft /> </Box>
            <Box> <BsArrowBarRight /> </Box>
        </LineHolder>
                </Div>
                <CardHolder>
                <Card3 
                image={img}
                 name='Williams Victor'
                 text='i will tell all people to register in skylife now as they offer the best courses at afordable prices'
                />
                <Card3
                 image={img2} 
                name='Precious Blessing'
                text='i loved the courses i ha at skylife they offer the best courses at afordable prices i loved the courses
                '
                />
                </CardHolder>
            </Main>
        </Container>
    </div>
  )
}

export default Sixth

const CardHolder = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;
margin-bottom: 50px;
width: 100%;
`
const Box = styled.div`
width: 50px;
height: 50px;
background-color: white;
font-size: 25px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
margin-left: 20px;
`

const LineHolder = styled.div`
display: flex;
`

const Title = styled.div`
font-size: 40px;
font-family: 700;
/* margin-right: 202px; */
`
const Div = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 350px;
    background-color: #EFEFF6;
    padding-top: 50px;
`