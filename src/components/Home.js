/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'

class Home extends React.Component {

    state = {
        renderMenu: true,
    }

    render() {
        const { renderMenu } = this.state
        return (
        <Container>
            <Menu rendered={renderMenu}/>
        </Container>)
    }
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 25%;
`

export default Home
