/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import ArrowImage from './arrow.svg'
import posed from 'react-pose'

const Container = styled.div`
  width: 100%;
  top: 50%;
  position: fixed;
  left:0;
  display: inline-flex;

`
const PosedArrow = posed.img({
  hidden: { opacity: 0 },
  opened: { opacity: 1 }
})

const PosedReverseArrow = posed.img({
  hidden: { opacity: 0 },
  opened: { opacity: 1 }
})

const LeftArrowImg = styled(PosedArrow)`
  margin: 10px;
  cursor: pointer;
`
const RightArrowImg = styled(PosedReverseArrow)`
  margin: 10px;
  transform: rotate(180deg);
  margin-left: auto;
  cursor: pointer;
`
const Arrow = props => (
  <LeftArrowImg pose={props.pose} src={ArrowImage} alt="Arrow" width="75" height="75"/>
)

const ReverseArrow = props => (
  <RightArrowImg pose={props.pose} src={ArrowImage} alt="Arrow" width="75" height="75"/>
)

function ArrowNavigation(props) {
  console.log(props)
  return (
  <Container>
    <Arrow pose={props.displayBack ? 'opened' : 'hidden'} onClick={() => console.log("BACK")}/>
    <ReverseArrow pose={props.displayNext ? 'opened' : 'hidden'} onClick={() => console.log("NEXT")}/>
  </Container>)
}
export default ArrowNavigation
