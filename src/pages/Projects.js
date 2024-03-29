import React from 'react'
import styled from 'styled-components'
import { navigate } from "@reach/router"


import Project from '../components/Project'
import BananupImg from '../components/Project/imgs/projects/bananup.png'
import NetflixImg from '../components/Project/imgs/projects/netflixroulette.png'
import SportizenImg from '../components/Project/imgs/projects/sportizen.png'
import ArrowNavigation from '../components/Navigation/arrow-navigation'
import ReactImg from '../components/Project/imgs/techs/react.svg'
import DjangoImg from '../components/Project/imgs/techs/django.svg'
import ReactNativeImg from '../components/Project/imgs/techs/reactnative.svg'
import NodeJsImg from '../components/Project/imgs/techs/nodejs.svg'

const projects = [
    {
        title: 'Bananup',
        description: 'A website made for semi-competitive gamers that want to improve their gaming skills thanks to community-driven feedbacks.',
        img : BananupImg,
        techs: [ReactImg, DjangoImg]
    },
    {
        title: 'NetflixRoulette',
        description: 'A website made for french Netflix users. It allows you to choose randomly in the french catalog. For now, nothing more than categories is offered as filters.',
        img: NetflixImg,
        techs: [ReactImg, DjangoImg]
    },
    {
        title: 'Sportizen',
        description: 'An application that permit to generate sportive activities from A to B or a loop with a precised distance. Users can report perturbations to the community, and those perturbations are used in activity generation. Of course, users can follow their performance and their previous activities',
        img: SportizenImg,
        techs: [ReactNativeImg, NodeJsImg]
    }
]

const Container = styled.div`
`
function Projects(props) {
    return <Container>
        <ArrowNavigation 
            backAction={() => { navigate('/projects/' + (Number.parseInt(props.projectId) - 1))}}
            nextAction={() => {navigate('/projects/' + (Number.parseInt(props.projectId) + 1))}}
            displayBack={props.projectId > 0}
            displayNext={props.projectId < projects.length - 1}/>
        <Project project={projects[props.projectId]}/>
    </Container>
}

export default Projects
