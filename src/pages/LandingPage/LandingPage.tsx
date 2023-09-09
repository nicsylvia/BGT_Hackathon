import Home from './Home'
import Little from './Little'
import styled from 'styled-components'
import img1 from "../../assets/briefcase.svg"
import img2 from "../../assets/camera.svg"
import img3 from "../../assets/cast.svg"
import img4 from "../../assets/check-point.svg"
import img5 from "../../assets/heart.svg"
import img6 from "../../assets/crd-view.svg"
import img7 from "../../assets/pantone.svg"
import img8 from "../../assets/volume-up.svg"
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Sixth from './Sixth'
import Seventh from './Seventh'
import Eight from './Eight'
import GlobalButton from '../../components/static/Desktop/GlobalButton'

const HomeScreen = () => {
  return (
    <div>
      
      <Home />
        <Container>
        <Main>
        <Tholder>
            <Title>Choice favourite course from top category</Title>
            <GlobalButton text='see All Categories' width='150px'/>
            </Tholder>
        <CardHolder>
        <Little title='Bussiness'
    text='If you want to be a successful business owner, our courses will help you do so. Book your course now.'
    bc='#EFEFF6'
    bg='rgb(84, 68, 165)'
    image={img1}
    pbg='#E2DDFF' />
        <Little title='Developement'
    text='Learn how to develop your software and websites. We provide you with a wide range of different development courses that will help you to learn more.'
    bc='#FEF3E8'
    bg='#EF8543'
    image={img2}
    pbg='#FAE0D0'/>
        <Little title='IT & software'
    text='If you want to learn something new in IT and Software, then this is the right place to help you with different IT and Software courses from which you can get the one for you.'
    bc='#DDF7FF'
    bg='#EF8543'
    image={img3}
    pbg='#FAE0D0'/>
        <Little title='IT & software'
    text='If you want to learn something new in IT and Software, then this is the right place to help you with different IT and Software courses from which you can get the one for you.'
    bc='#DDF7FF'
    bg='#EF8543'
    image={img4}
    pbg='#FAE0D0'/>
        <Little title='IT & software'
    text='If you want to learn something new in IT and Software, then this is the right place to help you with different IT and Software courses from which you can get the one for you.'
    bc='#DDF7FF'
    bg='#EF8543'
    image={img5}
    pbg='#FAE0D0'/>
        <Little title='IT & software'
    text='If you want to learn something new in IT and Software, then this is the right place to help you with different IT and Software courses from which you can get the one for you.'
    bc='#DDF7FF'
    bg='#EF8543'
    image={img6}
    pbg='#FAE0D0'/>
        <Little title='IT & software'
    text='If you want to learn something new in IT and Software, then this is the right place to help you with different IT and Software courses from which you can get the one for you.'
    bc='#DDF7FF'
    bg='#EF8543'
    image={img7}
    pbg='#FAE0D0'/>
        <Little title='IT & software'
    text='If you want to learn something new in IT and Software, then this is the right place to help you with different IT and Software courses from which you can get the one for you.'
    bc='#DDF7FF'
    bg='#EF8543'
    image={img8}
    pbg='#FAE0D0'/>
        </CardHolder>
        </Main>
        </Container>
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
        <Seventh />
        <Eight />
    </div>
  )
}

export default HomeScreen


const Title = styled.div`
font-size: 35px;
`
const Tholder = styled.div`
display: flex;
justify-content: space-between;
margin-top: 70px;
margin-bottom: 40px;
`
const CardHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  padding-bottom: 100px;
`

const Main = styled.div`
display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`