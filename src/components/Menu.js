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
        <CustomItem pose={this.state.hovering === 1 ? 'hovered' : 'idle'}
            onMouseEnter={() => this.setState({ hovering: 1 })}
            onMouseLeave={() => this.setState({ hovering: -1 })}>
            <CustomTextClosed href='.'>SOON AVAILABLE</CustomTextClosed>
        </CustomItem>
        <CustomItem pose={this.state.hovering === 2 ? 'hovered' : 'idle'}
            onMouseEnter={() => this.setState({ hovering: 2 })}
            onMouseLeave={() => this.setState({ hovering: -1 })}>
            <CustomTextClosed href='.'>SOON AVAILABLE</CustomTextClosed>
        </CustomItem>
        <CustomItem pose={this.state.hovering === 3 ? 'hovered' : 'idle'}
            onMouseEnter={() => this.setState({ hovering: 3 })}
            onMouseLeave={() => this.setState({ hovering: -1 })}>
            <CustomTextClosed href='.'>SOON AVAILABLE</CustomTextClosed>
        </CustomItem>
        <CustomItem pose={this.state.hovering === 4 ? 'hovered' : 'idle'}
            onMouseEnter={() => this.setState({ hovering: 4 })}
            onMouseLeave={() => this.setState({ hovering: -1 })}>
            <CustomTextClosed href='.'>SOON AVAILABLE</CustomTextClosed>
        </CustomItem>
    </Container>)
  }
}


const MenuDiv = posed.div({
    open: { opacity: 1, x: '0%' },
    close: { 
        opacity: 0,
        x: '25%',
    }
})

const Container = styled(MenuDiv)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10%;
`

const MenuItem = posed.div({
    idle: { y: '0%', scale: 1 },
    hovered: { y: '+15%', scale: 1.3 }
})

const CustomItem = styled(MenuItem)`
`


const CustomText = styled.a`
text-decoration: none;
color: #3D5473;
font-size: 150%;
`

const CustomTextClosed = styled(CustomText)`
color: #2D4459;
`

export default Menu
