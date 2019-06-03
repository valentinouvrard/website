/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'

class Menu extends React.Component {
    state = {
        hovering: -1,
    }
  render() {
      console.log(this.props)
    return (
      <Container pose={this.props.rendered ? 'open' : 'close'}>
        <CustomMenuDiv>
            <CustomItem 
                onMouseEnter={() => this.setState({ hovering: 1 })}
                onMouseLeave={() => this.setState({ hovering: -1 })}>
                <CustomText 
                    pose={this.state.hovering === 1 ? 'hovered' : 'idle'} 
                    href='https://netflixroulette.valentinouvrard.fr'>
                    What is Netflix Roulette ?
                </CustomText>
            </CustomItem>
            <CustomItem 
                onMouseEnter={() => this.setState({ hovering: 2 })}
                onMouseLeave={() => this.setState({ hovering: -1 })}>
                <CustomTextClosed 
                    pose={this.state.hovering === 2 ? 'hovered' : 'idle'} 
                    href='https://netflixroulette.valentinouvrard.fr'>
                    Soon Available
                </CustomTextClosed>
            </CustomItem>
            <CustomItem 
                onMouseEnter={() => this.setState({ hovering: 3 })}
                onMouseLeave={() => this.setState({ hovering: -1 })}>
                <CustomTextClosed 
                    pose={this.state.hovering === 3 ? 'hovered' : 'idle'} 
                    href='https://netflixroulette.valentinouvrard.fr'>
                    Soon Available
                </CustomTextClosed>
            </CustomItem>
            <CustomItem 
                onMouseEnter={() => this.setState({ hovering: 4 })}
                onMouseLeave={() => this.setState({ hovering: -1 })}>
                <CustomTextClosed 
                    pose={this.state.hovering === 4 ? 'hovered' : 'idle'} 
                    href='https://netflixroulette.valentinouvrard.fr'>
                    Soon Available
                </CustomTextClosed>
            </CustomItem>
        </CustomMenuDiv>
    </Container>)
  }
}


const AnimContainer = posed.div({
    open: { opacity: 1, y: '0%' },
    close: { 
        opacity: 0,
        y: '25%',
    }
})

const Container = styled(AnimContainer)`
    display: flex;
    flex-direction: row;
    justify-content: center;
`


const CustomMenuDiv = styled.div`
    width: 100%;
    margin: auto;
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
`
const MenuItem = posed.a({
    idle: { y: '0%', scale: 1 },
    hovered: { y: '+15%', scale: 1.3 }
})

const CustomItem = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 20%;
    margin: auto;
    margin-top: 0;
    padding: 10px;
    max-width: 400px;
    min-width: 200px;
    text-align: center;
`


const CustomText = styled(MenuItem)`
text-decoration: none;
color: #3D5473;
font-size: 125%;
`

const CustomTextClosed = styled(CustomText)`
color: #2D4459;
`

export default Menu
