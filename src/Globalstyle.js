import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

//Variables that we will use accrss the page
:root{
 
    --backgroundcolor: #10121a;
    --sidebar-color: #191d2b;
    --border-color: #2e344e
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
}

body{
    background-color: black;
    font-family: Bebas Neue,sans-serif
}


.navigationistoggled{
    transition: all .4s ease-in-out;
    transform: translateX(0);   
    z-index: 30;    
}


`;

export default GlobalStyle;