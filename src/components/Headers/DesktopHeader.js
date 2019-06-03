/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import Particles from 'react-particles-js'

class DesktopHeader extends React.Component {

    state = {
        hovering: -1,
    }

    render() {
        return (
        <Container>
            <SubContainer>
                <CustomTitle 
                    onMouseEnter={() => this.setState({ hovering: 1 })}
                    onMouseLeave={() => this.setState({ hovering: -1 })}
                    href='http://netflixroulette.valentinouvrard.fr'>
                    <MenuItem 
                        pose={this.state.hovering === 1 ? 'hovered' : 'idle'} >
                        PROJECTS
                    </MenuItem>
                </CustomTitle>
                <CustomTitle 
                    onMouseEnter={() => this.setState({ hovering: 2 })}
                    onMouseLeave={() => this.setState({ hovering: -1 })}
                    href='http://netflixroulette.valentinouvrard.fr'>
                    <MenuItem 
                        pose={this.state.hovering === 2 ? 'hovered' : 'idle'} >
                        ABOUT ME
                    </MenuItem>
                </CustomTitle>
                <CustomTitle 
                    onMouseEnter={() => this.setState({ hovering: 3 })}
                    onMouseLeave={() => this.setState({ hovering: -1 })}
                    href='http://netflixroulette.valentinouvrard.fr'>
                    <MenuItem 
                        pose={this.state.hovering === 3 ? 'hovered' : 'idle'}>
                        SKILLS
                    </MenuItem>
                </CustomTitle>
                <CustomTitle 
                    onMouseEnter={() => this.setState({ hovering: 4 })}
                    onMouseLeave={() => this.setState({ hovering: -1 })}
                    href='http://netflixroulette.valentinouvrard.fr'>
                    <MenuItem 
                        pose={this.state.hovering === 4 ? 'hovered' : 'idle'}>
                        ARTICLES
                    </MenuItem>
                </CustomTitle>
            </SubContainer>
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
        </Container>)
    }
}
const Container = styled.div`
    margin: 0;
    background-color: #2d132c;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2353163d'/%3E%3Cstop offset='1' stop-color='%2353163d' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23752551'/%3E%3Cstop offset='1' stop-color='%23752551' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23a51e3d'/%3E%3Cstop offset='1' stop-color='%23a51e3d' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%232d132c'/%3E%3Cstop offset='1' stop-color='%232d132c' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23801336'/%3E%3Cstop offset='1' stop-color='%23801336' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23c72c41'/%3E%3Cstop offset='1' stop-color='%23c72c41' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    clip-path: polygon(0% 0%, 90% 0%, 100% 49%, 90% 100%, 0% 100%);
    height: 100%;
    width: 25%;
`

const SubContainer = styled.div`
    margin-top: auto;
    margin-bottom: auto;
    width: 90%;
`

const CustomParticles = styled(Particles)`
    position: absolute;
    height: 100%;
    z-index: -10;
    width: 40%;
`


const PosedItem = posed.a({
    idle: { opacity: 0.5 },
    hovered: { opacity: 1 }
})

const MenuItem = styled(PosedItem)`
    color: #F2F2F2;
    font-size: 150%;
    font-weight: bold;
`

const CustomTitle = styled.a`
    max-width: 90%;
    display: block;
    margin: 40px;
    text-align: center;
    text-decoration: none;
`

export default DesktopHeader
