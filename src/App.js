/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { ContextProvider } from './context'
import WithThemes from './theme'
import styled from 'styled-components'

import Particles from 'react-particles-js';
class App extends React.Component {

  render() {
    return (
      <ContextProvider>
        <WithThemes>
          <MainContainer>
          <CustomParticles params={{
                    particles: {
                        number: {
                            value: 100,
                        },
                        color: {
                            value: "#FDFFFC"
                        },
                        line_linked: {
                            enable: false,
                        },
                        move: {
                            speed: 5
                        },
                        size: {
                            value: 2,
                            random: true
                        }
                    },
                    interactivity: {
                        modes: {
                            repulse: {
                                distance: 200,
                                duration: 100,
                            }
                        }
                    },
            }}/>
            <h1 style={{margin: 'auto', color: '#F2F2F2'}}>Hey, I'm just working on this. So don't worry, it'll be available soon !</h1>
          </MainContainer>
        </WithThemes>
    </ContextProvider>)
  }
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

const CustomParticles = styled(Particles)`
    position: absolute;
    height: 100%;
    z-index: -10;
    width: 100%;
    top: 0;
    left: 0;
`


export default App
