/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import { Link } from "@reach/router"
import { Grid } from '@material-ui/core';

const PageTitle = styled.span`
  font-style: normal;
  font-variant: normal;
  font-weight: 150;
  font-size : 28px;
  line-height : 23px;
  margin-right: auto;
`

const Container = styled.div`
`

const Subtitle = styled.span`
    font-size : 22px;
    line-height : 23px;
    font-weight: 150;
    color : #FFFDF1;
    color : rgb(255, 253, 241);
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const PosedItem = posed(Subtitle)({
    idle: { opacity: 0.5 },
    hovered: { opacity: 1 }
})

const MenuItem = styled(PosedItem)`
    color: #0D0D0D;
`

const CustomTitle = styled(Link)`
    text-decoration: none;
    margin-left: 40px;
`

const Line = styled.div`
    margin-top: 10px;
    border-bottom: 1px solid #5b2ff4;
    width: 100%;
`

const PosedLine = posed(Line)({
    hidden: { opacity: 0 },
    opened: { opacity: 1 }
})
function Header() {
  const [hovering, setHovering] = useState(-1)
  const route = window.location.pathname
  console.log(route)
  return (
  <Container>
      <Grid container spacing={3} justify="space-between">
        <Grid item xs={12} sm={4}>
            <PageTitle>Valentin Ouvrard</PageTitle>
        </Grid>
        <Grid item xs={12} sm={8}>
            <SubContainer>
                <CustomTitle 
                    onMouseEnter={() => setHovering(1)}
                    onMouseLeave={() => setHovering(-1)}
                    to='/'>
                    <MenuItem 
                        pose={(hovering === 1 || route === "/") ? 'hovered' : 'idle'} >
                        Home
                    </MenuItem>
                        <PosedLine pose={route === "/" ? 'opened' : 'hidden'}/>
                </CustomTitle>
                <CustomTitle 
                    onMouseEnter={() => setHovering(2)}
                    onMouseLeave={() => setHovering(-1)}
                    to='/projects/0'>
                    <MenuItem 
                        pose={(hovering === 2 || route.startsWith('/projects')) ? 'hovered' : 'idle'} >
                        Projects
                    </MenuItem>
                        <PosedLine pose={route.startsWith('/projects') ? 'opened' : 'hidden'}/>
                </CustomTitle>
                <CustomTitle 
                    onMouseEnter={() => setHovering(3)}
                    onMouseLeave={() => setHovering(-1)}
                    to='/resume'>
                    <MenuItem 
                        pose={(hovering === 3 || route === "/resume") ? 'hovered' : 'idle'} >
                        Resume
                    </MenuItem>
                        <PosedLine pose={route === "/resume" ? 'opened' : 'hidden'}/>
                </CustomTitle>
            </SubContainer>
        </Grid>
      </Grid>
  </Container>)
}
export default Header
