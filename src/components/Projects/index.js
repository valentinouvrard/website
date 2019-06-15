/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Project from './project'
const useStyles = makeStyles(() => ({
  gridStyle: {
    height: '100%',
    width: '100%',
    padding: 40,
  },
  cellStyle: {

  }
}))

const projects = [
  {
    title: "Netflix Roulette",
    pitch: "Netflix Roulette permits to choose randomly a movie or a serie on the french Netflix catalog.",
    img: require('./netflix-photo-2.jpg'),
    technologies: ["Django", "React"],
    date: "April 2019 - Now",
  },
  {
    title: "Sportizen",
    pitch: "Sportizen is a sport community application. Generate a path handling disruptions for your activities (bike or running). Users can report any disruption around him.",
    img: require('./sportizen.jpeg'),
    technologies: ["NodeJs", "React Native"],
    date: "January 2019 - Now"
  },
  {
    title: "Bananup",
    pitch: "Gaming feedback website. Share your video, get feedbacks and improve your gaming skills!",
    img: require('./gaming.jpeg'),
    technologies: ["Django", "React"],
    date: "June 2019 - Now"
  },
]
function Projects() {
  const classes = useStyles()
  return (
    <Grid 
      container
      spacing={8}
      alignItems="center"
      justify="center"
      className={classes.gridStyle}>
        {projects.map(project => (
          <Grid item xs={12} sm={6}>
            <Project project={project} />
          </Grid>
        ))}
    </Grid>)
}

export default Projects
