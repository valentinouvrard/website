import React, { useState } from 'react'
import styled from 'styled-components'
import posed from 'react-pose';
import useInterval from '../tools/useInterval';


const Container = styled.div`
    width: 100%;
    height: 100%;
`
const Bold = styled.span`
    font-weight: 400;
`

const Description = styled.p`
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 40px;
    margin-bottom: 150px;
    font-weight: 150;
    font-size : 52px;
    line-height : 60px;
    color : #FFFDF1;
    color : rgb(255, 253, 241);
`
const GradientAnim = posed.div({
    hidden: { 
        opacity: 0.5,
        scale: 1.2,
        transition: { duration: 10000 },
    },
    visible:{ 
        opacity: 1,
        scale: 1,
        transition: { duration: 10000 }
    },
  });

const GradientCircle = styled(GradientAnim)`
    background : linear-gradient(-270deg, rgba(91, 47, 244, 1) 0%, rgba(72, 37, 192, 0.77) 22.95%, rgba(24, 12, 64, 0.25) 75.11%, rgba(0, 0, 0, 0) 100%);
    opacity : 0.65;
    filter: alpha(opacity=65) progid:DXImageTransform.Microsoft.Alpha(opacity=65) progid:DXImageTransform.Microsoft.gradient(startColorstr='#5B2FF4',endColorstr='#000000' , GradientType=1);
    width: 600px;
    height: 600px;
    border-radius: 300px;
    bottom: 0;
    left: 0;
    margin-bottom: -50px;
    margin-left: 150px;
    position: absolute;
`

const GradientContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    position: absolute;
    overflow: hidden;
    z-index: -10;
    top: 0;
    left: 0;
`
function Home() {

    const [circleState, setCircleState] = useState(false);
    useInterval(() => {
        setCircleState(!circleState)
    }, 10000);
    return (
    <Container>
        <GradientContainer>
            <GradientCircle pose={circleState ? 'hidden' : 'visible'}/>
        </GradientContainer>
        <Description> An <Bold>Epita’s</Bold> student looking <br/>
            for an <Bold>international internship</Bold><br/>
            as <Bold>front-end developer</Bold></Description>
    </Container>)
}

export default Home
