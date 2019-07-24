import React from 'react'
import styled from 'styled-components'
import { navigate } from "@reach/router"


import Project from '../components/Project'
import BananupImg from '../components/Project/bananup.png'
import NetflixImg from '../components/Project/netflixroulette.png'
import SportizenImg from '../components/Project/sportizen.png'
import ArrowNavigation from '../components/Navigation/arrow-navigation';

const projects = [
    {
        title: 'Bananup',
        description: 'Website made for semi-competitor gamers that want to improve their gaming skills thanks to a community-driven feedbacks.',
        img : BananupImg,
    },
    {
        title: 'NetflixRoulette',
        description: '',
        img: NetflixImg,
    },
    {
        title: 'Sportizen',
        description: '',
        img: SportizenImg,
    }
]

const Container = styled.div`
    margin-right: 10em;
    margin-left: 10em;
`
function Projects(props) {
    return <Container>
        <ArrowNavigation 
            backAction={() => { navigate('/projects/' + props.projectId - 1); console.log(props.projectId - 1)}}
            nextAction={() => {navigate('/projects/' + props.projectId + 1); console.log(props.projectId + 1)}}
            displayBack={props.projectId > 0}
            displayNext={props.projectId < projects.length - 1}/>
        <Project project={projects[props.projectId]}/>
    </Container>
}

export default Projects
