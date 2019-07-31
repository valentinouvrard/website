import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'

const Container = styled.div`
  width: 21cm;
  height: 29.7cm;
  padding: 2cm;
  margin: 1cm auto;
  border: 1px #D3D3D3 solid;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  @media print {
    display:visible;
    visibility: visible;
  }
`
const Title = styled.h1`
  color: #0D0D0D;
`

function ResumeA4(props) {
    return (
    <Container>
      <Title>Soon available</Title>
    </Container>)
}

export default ResumeA4
