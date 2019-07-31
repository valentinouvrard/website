import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core';
import ResumeA4 from '../components/Resume/resume';


const Container = styled.div`
    width: 100%;
    height: 100%;
`


const Title = styled.h2`
    margin-top: 10px;
    font-size : 48px;
    text-align: right;
    font-weight: 150;
`
const LineSeparator = styled.div`
    margin-top: 50px;
    border-bottom: 1px solid #F2F2F2;
    width: 100%;
`


function Resume() {
    return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={12} lg={9}>
          <ResumeA4/>
        </Grid>
        <Grid item md={12} lg={3}>
          <LineSeparator/>
          <Title>Who am I?</Title>
        </Grid>
      </Grid>
    </Container>)
}

export default Resume
