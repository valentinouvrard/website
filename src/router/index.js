
import React from 'react'
import { Router } from "@reach/router"

import Home from '../pages/Home'
import ProjectsPage from '../pages/Projects'

function AppRouter() {
  return (
    <Router>
      <Home path="/"/>
      <ProjectsPage path="/projects"/>
    </Router>
  )
}

export default AppRouter
