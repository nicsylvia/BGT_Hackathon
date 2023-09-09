import React from 'react'
import styled from 'styled-components'

interface iButton {
width?:string
text?:string
}

const GlobalButton:React.FC<iButton> = ({width,text}) => {
  return (
    <div>
      <Container width={`${width}`}>
      {text}
      </Container>
    </div>
  )
}

export default GlobalButton

const Container = styled.div<{width:string}>`
height: 40px;
width: ${({width})=>width};
display: flex;
align-items: center;
justify-content: center;
background-color: orangered;
color: white;
border-radius: 5px;
cursor: pointer;
`
