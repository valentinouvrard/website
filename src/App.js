/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { ContextProvider } from './context'
import WithThemes from './theme'
import styled from 'styled-components'

import AppRouter from './router';
import Header from './components/Headers/';
import CustomParticles from './components/Particles';





const MainContainer = styled.div`
  * {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color : #FFFDF1;  
  }
  background : linear-gradient(60deg, rgba(2, 18, 30, 0.6) 0%, rgba(2, 18, 30, 1) 0%, rgba(3, 17, 32, 1) 52.27%, rgba(6, 15, 39, 1) 71.1%, rgba(10, 10, 50, 1) 84.51%, rgba(17, 4, 67, 1) 95.29%, rgba(21, 0, 77, 1) 99.87%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#02121E',endColorstr='#15004D' , GradientType=1);
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2000;
`

const SubContainer = styled.div`
  padding: 2em;
  padding-right: 2em;
  padding-left: 2em;
`
function App() {
  return (
    <ContextProvider>
      <WithThemes>
        <MainContainer>
          <SubContainer>
            <Header/>
            <AppRouter/>
          </SubContainer>
          <CustomParticles/>
        </MainContainer>
      </WithThemes>
    </ContextProvider>)
}
export default App
