/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import Typing from 'react-typing-animation'
import Menu from './Menu'
import Particles from 'react-particles-js'

class Home extends React.Component {

    state = {
        renderMenu: false,
        showEaster: false,
    }

    render() {
        const { renderMenu, showEaster } = this.state
        return (
        <Container>
            <CustomParticles params={{
            		particles: {
                        number: {
                            value: showEaster ? 50 : 100,
                        },
            			line_linked: {
                            enable: false,
                        },
                        shape: showEaster ? {
                            type: 'images',
                            images: [
                                {src: require('./ouvrar_v.png'), height: 20, width: 20},
                                {src: require('./wentzl_q.png'), height: 20, width: 20},
                                {src: require('./mazyad_v.png'), height: 20, width: 20},
                                {src: require('./leaute_a.png'), height: 20, width: 20},
                                {src: require('./pain_c.png'), height: 20, width: 20},
                                {src: require('./reynau_q.png'), height: 20, width: 20},
                            ]
                        } : {},
                        move: {
                            speed: 10
                        },
                        size: {
                            value: showEaster ? 20 : 2
                        }
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse'
                            },
                        },
                        modes: {
                            repulse: {
                                distance: 200,
                                duration: 100,
                            }
                        }
                    },
            }}/>
            <CustomTyping speed={20} onFinishedTyping={() => this.setState({renderMenu: true})}>
                <CustomText>Hey, I'm Valentin Ouvrard.<br/>Welcome to my website, what do you want to know ?</CustomText>
            </CustomTyping>
            <Menu rendered={renderMenu}/>
            <EasterEgg onClick={() => this.setState({showEaster: true})}/>
        </Container>)
    }
}

const EasterEgg =  styled.div`
    width: 1%;
    height: 1%;
    position: absolute;
    bottom: 1%;
    right: 1%;
`

const Container = styled.div`
    padding: 20px;
    width: 100%;
    height: 100%;
`
const CustomParticles = styled(Particles)`
    position: absolute;
    height: 100%;
    width: 100%;
`

const CustomTyping = styled(Typing)`
    padding-bottom: 1%;
`
const CustomText = styled.span`
    color: #FDFFFC;
    font-size: 150%;
`

export default Home
