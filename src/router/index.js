
import React from 'react'

import Home from '../pages/Home'
import Projects from '../pages/Projects'
import { Router, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';

const RouteContainer = posed.div({
  enter: {  opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0, delay: 300 }
});

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);
function AppRouter() {
  return (
    <PosedRouter>
      <Home path="/"/>
      <Projects path="projects/:projectId"/>
      <Home path="resume"/>
    </PosedRouter>
  )
}

export default AppRouter
