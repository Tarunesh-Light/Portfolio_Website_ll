import styled from "styled-components";
import '../style.css';
import Tarunesh_Thangaraju from '../static/Tarunesh_Thangaraju.jpg';
import GitHubIcon from '@material-ui/icons/GitHub.js';
import LinkedIn from '@material-ui/icons/LinkedIn.js';
import Sidebar from '../Structure/Sidebar.js';
import MenuIcon from '@material-ui/icons/Menu';
import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Header(){
      
    const [navigationToggler , setnavigationToggler] = useState(false);

    return (<>
    <Sidebar navigationToggler={navigationToggler} />
    <Headerstyled>
    
    <div className="headpara">   
       <h1 className="fullstk"><strong>FULL-STACK DEVELOPER</strong></h1>
    </div>
    
    <div className="headpara2">
    <p>- A passionate and evolving Full-Stack developer</p>
    <p>&nbsp; &nbsp;Have a good time exploring my Portfolio</p>
    </div>

    <div className="menu">
        <MenuIcon onClick={() => setnavigationToggler(!navigationToggler)} className="menuicon"></MenuIcon>
    </div>

    <div className="icons"> 
    <GitHubIcon className="github"/>
    <span className="linedivider"></span>
    <LinkedIn className="linkedin" />
    <span className="linedivider"></span>
    <img className="photoicon" src={Tarunesh_Thangaraju}></img>
    </div>
    </Headerstyled>
    </>)
}

const Headerstyled = styled.div`

position: relative;
margin-left: 270px;
height:100vh;
background-color: #10121A;
overflow: hidden;

@media screen and (max-width:1250px){
    transition: all .4s ease-in-out;
    margin-left: 0px;
    .menu{
    position: absolute;
    left: 90% ;
    top:10%;
    transform: translate(-top,-left);
    color: #77498fab;
    z-index: 20;
}
.menuicon{
    font-size: 30px;
}
}

@media screen and (min-width:1250px){
.menuicon{
    font-size: 0px;
}
}


.linedivider{
    flex-grow: 1;
    border-bottom: 1px solid wheat;
    margin-bottom: 13px;
}

.fullstk{
    font-size: 100px;
    color: wheat;
    animation-name:moveinLeft;
   animation-duration:2s;
}

.headpara{
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-bottom: 1px solid wheat;
    width:900px;
}

.headpara2{
    color:wheat;
    font-size: 21px;
    position: relative;
    top: 55%;
    left: 55%;
    animation-name:moveinRight;
    animation-duration:4s;
}

.photoicon{
    width:6%;
    border: 3px solid var(--border-color);
    border-radius: 15px;
}

.linkedin{
    color: white;
    font-size: 27px;
}

.icons{
    display: flex;
    gap: 20px;
    position: absolute;
    top: 75%;
    left: 29%;
    transform: translate(-top,-left);
    animation-name:moveinRight;
    animation-duration:3s;
}

.github{
    color: white;
    font-size: 22px;
}

@keyframes moveinLeft {
    0% {
      opacity: 0;  
      transform: translateX(-100px);
    }

    20%{
     opacity: 0;  
      transform: translateX(-80px);
    }

    40%{
        opacity: 0;  
         transform: translateX(-60px);
       }
    
    80%{
        opacity: 1;
        transform: translateX(20px);
    }
    
    100%{
      opacity: 1;  
      transform: translateX(0);
    }
}

@keyframes moveinRight {
    0% {
      opacity: 0;  
    }
    
    100%{
      opacity: 1;  
    }
}


@media screen and (max-width:1000px) and (min-width: 600px){

.headpara{
    top: 35%;
    left: 45%;
    transform: translate(-top,-left);
    width: 60%;
    font-size: 10px;
}

.menu{
    position: absolute;
    left: 85% ;
    top:10%;
    transform: translate(-top,-left);
}

.headpara2{
    color:wheat;
    font-size: 21px;
    position: relative;
    top: 57%;
    left: 40%;
}

.icons{
    width: 65%;
    position: absolute;
    top: 80%;
    left: 19%;
    transform: translate(-top,-left);
}

.photoicon{
    width:6%;
    border: 3px solid var(--border-color);
    border-radius: 15px;
}

.linedivider{
    flex-grow: 1;
    border-bottom: 1px solid wheat;
    margin-bottom: 17px;
}

}

@media screen and (max-width:600px) and (min-width: 500px){

.headpara{
    top: 35%;
    left: 40%;
    transform: translate(-top,-left);
    width: 50%;
    font-size: 50px;
}

.menu{
    position: absolute;
    left: 85% ;
    top:10%;
    transform: translate(-top,-left);
}

.headpara2{
    color:wheat;
    font-size: 21px;
    position: relative;
    top: 60%;
    left: 30%;
}

.icons{
    width: 60%;
    position: absolute;
    top: 80%;
    left: 19%;
    transform: translate(-top,-left);
}

.photoicon{
    width:8%;
    border: 3px solid var(--border-color);
    border-radius: 15px;
}

}



@media screen and (max-width:500px) and (min-width: 300px){

.headpara{
    top: 35%;
    left: 20%;
    transform: translate(-top,-left);
    width: 10%;
    font-size: 30px;
}

.fullstk{
    font-size: 20vw;
}

.menu{
    position: absolute;
    left: 85% ;
    top:10%;
    transform: translate(-top,-left);
}

.headpara2{
    color:wheat;
    font-size: 4vw;
    position: relative;
    top: 60%;
    left: 23%;
}

.icons{
    width: 60%;
    position: absolute;
    top: 80%;
    left: 19%;
    transform: translate(-top,-left);
}

.photoicon{
    width:9%;
    border: 3px solid var(--border-color);
    border-radius: 15px;
}
}

@media screen and (max-width: 400px){

    .headpara{
    top: 35%;
    left: 40%;
    transform: translate(-top,-left);
    width: 50%;
    font-size: 10vw;
}
.photoicon{
    width:12%;
    border: 3px solid var(--border-color);
    border-radius: 20px;
}

}

`;