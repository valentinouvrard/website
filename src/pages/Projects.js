/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import Projects from '../components/Projects'

class ProjectsPage extends React.Component {

    state = {
        renderMenu: true,
    }

    render() {
        const { renderMenu } = this.state
        return (
        <Container>
            <Projects rendered={renderMenu}/>
        </Container>)
    }
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`

export default ProjectsPage
