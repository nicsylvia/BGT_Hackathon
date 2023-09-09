import styled from 'styled-components'
import img1 from "../../assets/profile-img4.jpg"
import img2 from "../../assets/profile-img1.jpg"
import Card4 from './Cards4'

const Eight = () => {
  return (
    <div>
        <Container>
            <Main>
                <CardHolder>
                <Card4 
                image={img1}
                title='Become a teacher'
                text='Teach what you love. Coursector gives you the tools to create a course.'
                text2='Apply as a Teacher'
                />
                <Card4 
                image={img2} 
                title='Image Description'
                text='Coursector for business
                Get unlimited access to 3,000+ of Coursector’s top courses for your team'
                text2='Get Skillify for Bussiness'
                />
                </CardHolder>
            </Main>
        </Container>
    </div>
  )
}

export default Eight

const CardHolder = styled.div`
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
    align-items: center;
    width: 100%;
    height: 250px;
    padding-top: 50px;
    background-color: #FEF0EF;
`