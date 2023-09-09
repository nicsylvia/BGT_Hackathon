import styled from 'styled-components'
import pix from "../../assets/hhhhh.jpeg"
import pix3 from "../../assets/jjjjj.png"

const DetailPage = () => {
  return (
    <Container>
        <Main>
    <Top>
        <Holder>
        <Pic src={pix} />

        <TitleHold>
            <CourseName>JavaScript For Beginners</CourseName>
            <Teacher>Elizabeth . follow</Teacher>
        </TitleHold>

        </Holder>
        <Button>Take a Quiz</Button>
    </Top>

    <Middle>
        <Pics2 src={pix3}/>
    </Middle>

    <Buttom>
        <Hold>
        <Explain>Definition Of JavaScript</Explain>
        <Desc>JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.</Desc>
        </Hold>
        <Hold>
        <Explain>Importance Of JavaScript</Explain>
        <Desc>JavaScript's most popular use is for web development, and it is one of the most powerful tools a developer can have on their toolbelt. Developers use JavaScript in web development to add interactivity and features to improve the user experience and make the internet much more enjoyable.</Desc>
        </Hold>
        <Hold>
        <Explain>Summary Of JavaScript</Explain>
        <Desc>JavaScript Developer is a booming career, and those looking to make a career in JavaScript have lucrative prospects. Some of the top JavaScript Job roles include:
Front end web developer,
Web application developer, 
Website administrator, 
Full Stack Developer, 
Quality Assurance Automation,  Specialist, 
Web Marketing manager</Desc>
        </Hold>
    </Buttom>

    <LastDiv>
        <PicsDiv>
            <Line></Line>
            <Pics3 src={pix}/>
            <Line></Line>
        </PicsDiv>
    </LastDiv>

    <Desc2>
            <Teacher2>Elizabeth</Teacher2>
            <CourseName2>I love teaching, just follow me up to learn more</CourseName2>
        <Button>Take a Quiz</Button>
    </Desc2>
        </Main>
    </Container>
  )
}

export default DetailPage

const Teacher2 = styled.div`
font-size: 17px;
margin-bottom: 15px;
font-weight: bold;
color: black;
`
const CourseName2 = styled.div`
font-weight: 700;
font-size: 15px;
margin-bottom: 15px;
color: #3c3c3c;
`

const Desc2 = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin-bottom: 50px;
`
const Pics3 = styled.img`
width: 70px;
height: 70px;
border-radius: 50%;
margin: 0 10px;
object-fit: cover;
`
const Line = styled.div`
width: 350px;
height: 2px;
background-color: #d8d8d8;
`
const PicsDiv = styled.div`
display: flex;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

`
const LastDiv = styled.div`
margin-top: 30px;
width: 100%;
margin-bottom: 10px;
`

const Explain = styled.div`
font-weight: 800;
font-size: 18px;
`
const Desc = styled.div`
font-size: 15px;
margin-top: 8px;
`
const Hold = styled.div`
width: 100%;
margin-bottom: 18px;
`
const Buttom = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Pics2 = styled.img`
width: 100%;
    height: 500px;
    border-radius: 15px;
    object-fit: cover;
`
const Middle = styled.div`
    width: 100%;
    height: 500px;
    background-color: #61E46D;
    border-radius: 15px;
    margin-top: 30px;
`
const Button = styled.div`
width: 120px;
height: 40px;
border-radius: 50px;
background-color: #232323;
display: flex;
justify-content: center;
align-items: center;
color: white;
transition: all 350ms;
&:hover  {
  cursor: pointer;
    background-color: #3c3c3c 
}
`

const Teacher = styled.div`
font-size: 13px;
margin-bottom: 10px;
font-weight: bold;
color: #2b2b2b;
`
const CourseName = styled.div`
font-weight: 700;
font-size: 17px;
margin-bottom: 10px;
color: #1c1c1c;
`
const TitleHold = styled.div`

`

const Pic = styled.img`
display: flex;
justify-content: space-between;
height: 50px;
object-fit: cover;
width: 50px;
border-radius: 50%;
margin-right: 20px;
`
const Holder = styled.div`
display: flex;
`

const Top = styled.div`
display: flex;
width: 100%;
margin-top: 50px;
justify-content: space-between;
`

const Main = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x    : hidden ;
`