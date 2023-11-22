import styled from "styled-components";
import Header from './Structure/Header.js';
import About from "./Structure/About.js";
import Skills from './Structure/Skills.js';
import Projects from './Structure/Projects.js';
import Contact from './Structure/Contact.js';
import Certifications from './Structure/Certifications.js';
import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./Structure/Sidebar.js";

//Export App function by default

export default function App(){

    return (<>
    <AppStyled>

    <Routes>
        <Route path="/" element={<Header></Header>}>
        </Route>
        <Route path="/about" element={<About></About>}>
        </Route>
        <Route path="/skills" element={<Skills></Skills>}>
        </Route>
        <Route path="/projects" element={<Projects></Projects>}>        
        </Route>
        <Route path="/contact" element={<Contact></Contact>}>
        </Route>
        <Route path="/certifications" element={<Certifications></Certifications>}>  
        </Route>
    </Routes>
    </AppStyled>
    </>)
}

const AppStyled = styled.div`

`;