import React from 'react'
import Particles from 'react-particles-js';
import styled from 'styled-components'

const StyledParticles = styled(Particles)`
    position: absolute;
    margin: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1000;
`

function CustomParticles() {
  return <StyledParticles params={{
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
  }}/>
}

export default CustomParticles;