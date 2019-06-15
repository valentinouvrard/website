/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%',
    margin: 'auto',
    backgroundColor: '#F2F2F2'
  },
  media: {
    height: 0,
    paddingTop: '35.25%', // 16:9,
    marginTop:'30'
  },
  avatar: {
    backgroundColor: '#0D790D',
  },
}));

function Project(props) {
  const classes = useStyles()
  const { project } = props
  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <Typography variant="body2" color="textSecondary" component="p">
            {project.technologies.join(', ')}
          </Typography>
        }
        title={project.title}
        subheader={project.date}
      />
      <CardMedia
        className={classes.media}
        image={project.img}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {project.pitch}
        </Typography>
      </CardContent>
    </Card>)
}

export default Project

