import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
const Container = styled.div`
    width: 100%;
    height: 100%;
    * {
      color : #FFFDF1;
      color : rgb(255, 253, 241);
    }
`

const ProjectImg = styled.img`
  width: 100%;
  margin-top: 20px;
`
const Bold = styled.span`
    font-weight: 400;
`

const Title = styled.h2`
    margin-top: 10px;
    font-weight: 150;
    font-size : 48px;
`

const Description = styled.p`
  font-weight: 150;
  font-size : 24px;
  line-height : 32px;
`

const LineSeparator = styled.div`
    margin-top: 50px;
    border-bottom: 1px solid #F2F2F2;
    width: 100%;
`
function Project(props) {
    return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={12} lg={4}>
          <LineSeparator/>
          <Title>{props.project.title}</Title>
          <Description>{props.project.description}</Description>
        </Grid>
        <Grid item md={12} lg={8}>
          <ProjectImg src={props.project.img}/>
        </Grid>
      </Grid>
    </Container>)
}

export default Project
