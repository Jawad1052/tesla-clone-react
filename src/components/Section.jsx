import React from 'react'
import styled from 'styled-components'
import { Fade, Slide } from "react-awesome-reveal";
function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgimage={backgroundImg}>
            <Slide direction='up'>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Slide>
            <Buttons>
                <Slide direction='up'>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText && <RightButton>
                            {rightBtnText}
                        </RightButton>}
                    </ButtonGroup>
                </Slide>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section
const Wrap = styled.div`
height: 100vh;
width: 100vw;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: ${props => `url('./images/${props.bgimage}')`};
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;`



const ItemText = styled.div`
text-align: center;
padding-top: 12vh;
`

const ButtonGroup = styled.div`
display:flex;
@media(max-width: 768px) {
    flex-direction:column;
}

`
const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width:256px;
border-radius: 15px;
color: white;
display: flex;
align-items:center;
justify-content: center;
border-radius: 100px;
opacity:0.85;
text-transform: uppercase;
font-size:12px;
cursor: pointer;
margin: 8px;
`
const RightButton = styled(LeftButton)`
background-color:white;
color:black;
opacity: 0.65;`

const DownArrow = styled.img`
margin-top:10px;
height:40px;
animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom:22px;`