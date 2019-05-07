/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { ContextProvider } from './context'
import WithThemes from './theme'

import Home from './components/Home'

class App extends React.Component {

  render() {
    return (
      <ContextProvider>
        <WithThemes>
          <Home/>
        </WithThemes>
    </ContextProvider>)
  }
}

export default App
