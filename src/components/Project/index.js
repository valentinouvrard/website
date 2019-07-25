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

const Title = styled.h2`
    margin-top: 10px;
    font-weight: 150;
    font-size : 48px;
    @media (max-width: 960px) {
        font-size: 36px;
        line-height : 42px;
    }
`

const Description = styled.p`
  font-weight: 150;
  font-size : 24px;
  line-height : 32px;
  @media (max-width: 960px) {
      font-size: 18px;
      line-height : 26px;
  }
`
const Techs = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`

const TechImg = styled.img`
  max-height: 5em;
  max-width: 10em;
  margin: 10px;
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
        <Grid item sm={12} md={4}>
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
        <Grid item sm={12} md={8}>
          <ProjectImg src={props.project.img}/>
        </Grid>
      </Grid>
    </Container>)
}

export default Project
