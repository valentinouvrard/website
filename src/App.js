/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { ContextProvider } from './context'
import WithThemes from './theme'
import styled from 'styled-components'

import Header from './components/Headers'

import AppRouter from './router';
function App() {
  return (
    <ContextProvider>
      <WithThemes>
        <MainContainer>
          <Header/>
          <AppRouter/>
        </MainContainer>
      </WithThemes>
    </ContextProvider>)
}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
`
export default App
