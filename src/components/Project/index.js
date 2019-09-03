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
  display: block;
  margin: auto;
  max-width: 80%;
  max-height: 80%;
  margin-top: 50px;

  @media (max-width: 960px) {
      max-width: 100%;
      max-height: 100%;
  }
`

const Title = styled.h2`
    margin-top: 10px;
    font-size : 36px;
    @media (max-width: 600px) {
        font-size: 26px;
        line-height : 32px;
    }
`

const Description = styled.p`
  font-size : 18px;
  line-height : 32px;

  @media (max-width: 960px) {
      font-size: 16px;
      line-height : 22px;
  }
`
const Techs = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`

const TechImg = styled.img`
  height: 3em;
  margin: 10px;
  @media (max-width: 1280px) {
    height: 2em;
  }
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
          <Techs>
            <Description>Made with</Description>
            <Grid container spacing={0}>
                {props.project.techs.map(img =><TechImg src={img}/>)}
            </Grid>
          </Techs>
        </Grid>
        <Grid item md={12} lg={8}>
          <ProjectImg src={props.project.img}/>
        </Grid>
      </Grid>
    </Container>)
}

export default Project
