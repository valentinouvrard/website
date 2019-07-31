/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import ArrowImage from './arrow.svg'
import posed from 'react-pose'

const Container = styled.div`
  width: 100%;
  bottom: 5%;
  position: fixed;
  left:0;
  z-index: 100000;
  display: inline-flex;

  @media print {
    * {
        display:none;
    }
  }

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
  <LeftArrowImg pose={props.pose} src={ArrowImage} alt="Arrow" width="75" height="75" onClick={props.onClick}/>
)

const ReverseArrow = props => (
  <RightArrowImg pose={props.pose} src={ArrowImage} alt="Arrow" width="75" height="75" onClick={props.onClick}/>
)

function ArrowNavigation(props) {
  return (
  <Container>
    {props.displayBack && <Arrow pose={props.displayBack ? 'opened' : 'hidden'} onClick={props.backAction}/>}
    {props.displayNext && <ReverseArrow pose={props.displayNext ? 'opened' : 'hidden'} onClick={props.nextAction}/>}
  </Container>)
}
export default ArrowNavigation
