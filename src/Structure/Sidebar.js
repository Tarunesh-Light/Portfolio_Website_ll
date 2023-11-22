import styled from "styled-components";
import Navigation from '../Structure/Navigation.js';

export default function Sidebar({navigationToggler}){

    return (<>
    <Sidebarstyled className={`${navigationToggler? 'navigationistoggled' : ''}`}>
    <Navigation></Navigation>
    </Sidebarstyled>
    </>)
}

const Sidebarstyled = styled.div`

height:100vh;
width:270px;
position: fixed;
background-color: var(--sidebar-color);


@media screen and (max-width:1200px){
    transform: translateX(-100%);
    z-index: 30; 
}

`;