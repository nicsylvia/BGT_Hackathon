import styled from 'styled-components'
import GlobalButton from '../../components/static/Desktop/GlobalButton'

const Fourth = () => {
  return (
    <div>
        <Container>
            <Pics />
            <Div>
                <Title>Select the best from various online courses.</Title>
                <Text>Our online video courses give you the freedom to learn remotely, and our experts will <br/> guide you properly.</Text>
                <GlobalButton text='Join Today' width='150px' />
            </Div>
            <Pics />
        </Container>
    </div>
  )
}

export default Fourth

const Text = styled.div`
font-size: 20px;
margin: 20px 0;
text-align: center;
line-height: 1.8;
`

const Title = styled.div`
font-size: 40px;
font-weight: 700;
`

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Pics = styled.img``

const Container = styled.div`
display: flex;
justify-content: space-between;
height: 500px;
background-color: #FEF0EF;
`