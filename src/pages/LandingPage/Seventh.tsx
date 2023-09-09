import styled from 'styled-components'
import {BsArrowBarLeft} from "react-icons/bs"
import {BsArrowBarRight} from "react-icons/bs"
import img1 from "../assets/partner.png"
import img2 from "../assets/partner1.png"
import img3 from "../assets/partner2.png"
import img4 from "../assets/partner3.jpg"

const Seventh = () => {
  return (
    <div>
        <Container>
            <Main>
            <Div>
                <Title>Trusted by our awesome partners</Title>

                <LineHolder>
            <Box> <BsArrowBarLeft /> </Box>
            <Box> <BsArrowBarRight /> </Box>
        </LineHolder>
                </Div>
                <PicsHolder>
                    <Pics src={img1}/>
                    <Pics src={img2}/>
                    <Pics src={img3}/>
                    <Pics src={img1}/>
                    <Pics src={img4}/>
                    <Pics src={img3}/>
                </PicsHolder>
            </Main>
        </Container>
    </div>
  )
}

export default Seventh

const Pics = styled.img`
width: 150px;
height: 50px;
margin-top: 15px;
`
const PicsHolder = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;
`
const Box = styled.div`
width: 50px;
height: 50px;
background-color: #EFEFF6;
color: #b8b8b8;
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
    /* justify-content: space-between; */
    width: 90%;
    flex-direction: column;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 250px;
    padding-top: 50px;
`