import styled from "styled-components";
import '../style.css';
import Sidebar from '../Structure/Sidebar.js';
import yoga from '../static/projects/Yoga.png';
import Starbucks from '../static/projects/Starbucks.png';
import Shareup from '../static/projects/Shareup.png';
import Stygian from '../static/projects/Stygian.png';
import MenuIcon from '@material-ui/icons/Menu';
import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function About(){

    const [navigationToggler , setnavigationToggler] = useState(false);

    return (<>
    <Sidebar navigationToggler={navigationToggler} />
    <Aboutstyle>
        <h1 className="projects">Projects</h1>
        <div className="certificate">
        <div>
           <img className="htmlcss" src={Starbucks}></img><br />
           <span className="certpara1">&nbsp;Starbucks Coffee Company - Wordpress Website</span>
        </div>
        <div>
           <img className="htmlcss" src={Stygian}></img>
           <p className="certpara">&nbsp;Stygian - Your One spot Fashion style Desitination</p>
        </div>
        <div>
           <img className="htmlcss" src={yoga}></img>
           <p className="certpara">&nbsp;YOGA blog website</p>
        </div>
        <div>
           <img className="htmlcss" src={Shareup}></img>
           <p className="certpara" id="shareupp">&nbsp;Share Up - Share Your thoughts</p>
        </div>
        <div className="menu">
        <MenuIcon onClick={() => setnavigationToggler(!navigationToggler)} className="menuicon"></MenuIcon>
    </div>
    </div>  
    </Aboutstyle>
    </>)
}

const Aboutstyle = styled.div`

position: relative;
margin-left: 270px;
height:100vh;
background-color: #10121A;
overflow: auto;


@media screen and (max-width:1250px){
    transition: all .4s ease-in-out;
    margin-left: 0px;
    .menu{
    position: absolute;
    left: 95% ;
    top:-20%;
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

#shareupp{
    margin-bottom: 20px;
}

.certificate{
    position: absolute;
    top: 28%;
    left: 12%;
    transform: translate(-8%,-6%);
    display: grid;
    width: 85%;
    gap:35px;
    grid-template-columns: 1fr 1fr ;
    grid-row-gap:60px ;
}

.certpara,.certpara1{
    color: black;
    font-family: Impo;
    font-size: 18px;
    background-color: #77498fab;
    //margin-right:113px ;
    width: 400px;
    padding-top:5px;
}

.certpara1{
    display: inline-block;
    width: 395px;
}

.projects{
    font-family: Impo,sans-serif;
    font-size: 20px;
    color: wheat;
}

.projects{
    font-size: 50px;
    position: absolute;
    top: 8%;
    left: 6%;
    transform: translate(-8%,-6%);
}

@media screen and (max-width:1250px){
 
    .projects{
    position: absolute;
    top: 10%;
    left: 9%;
    transform: translate(-top,-left);
    }

    .certificate{
    position: absolute;
    top: 30%;
    left: 15%;
    transform: translate(-8%,-6%);
}
}

@media screen and (max-width:920px){
    .certificate{
        display: grid;
        grid-template-columns: 1fr;
        top: 37%;
         left: 35%;
         transform: translate(-8%,-6%);

    }

    .menu{
    position: absolute;
    left: 70% ;
    top:-8%;
    transform: translate(-top,-left);
    color: #77498fab;
    z-index: 20;
}
   
    overflow-x: hidden;
    

    .projects{
    position: absolute;
    top: 12%;
    left: 10%;
    transform: translate(-top,-left);
}
}

@media screen and (max-width:870px){

    .menu{
    position: absolute;
    left: 70% ;
    top:-10%;
    transform: translate(-top,-left);
    color: #77498fab;
    z-index: 20;
}
   
}


@media screen and (max-width:690px){
    .certificate{
        display: grid;
        grid-template-columns: 1fr;
        top: 36%;
         left: 25%;
         transform: translate(-8%,-6%);

    }

    .menu{
    position: absolute;
    left: 75% ;
    top:-10%;
    transform: translate(-top,-left);
    color: #77498fab;
    z-index: 20;
}

    .projects{
    position: absolute;
    top: 10%;
    left: 10%;
    transform: translate(-top,-left);
}

}


@media screen and (max-width:550px){
    .certificate{
        display: grid;
        grid-template-columns: 1fr;
        top: 36%;
         left: 30%;
         transform: translate(-8%,-6%);
         img{
         width: 65%;
         }
    }

    
    .menu{
    position: absolute;
    left: 75% ;
    top:-15%;
    transform: translate(-top,-left);
    color: #77498fab;
    z-index: 20;
}

    .certpara1{
        padding-left: 6px;
    display: inline-block;
    width: 53.5vw;
    font-size: 12px;
}
.certpara{
    padding-left: 6px;
    display: inline-block;
    width: 53.5vw;
    font-size: 12px;
}

    .projects{
    position: absolute;
    top: 10%;
    left: 10%;
    transform: translate(-top,-left);
}
}

@media screen and (max-width:450px){

    .menu{
    position: absolute;
    left: 75% ;
    top:-16%;
    transform: translate(-top,-left);
    color: #77498fab;
    z-index: 20;
}
}

@media screen and (max-width:450px) and (min-width:400px){
    .menu{
    position: absolute;
    left: 75% ;
    top:-18%;
    transform: translate(-top,-left);
    color: #77498fab;
    z-index: 20;
}
  
}

@media screen and (max-width:400px){

.menu{
position: absolute;
left: 75% ;
top:-21%;
transform: translate(-top,-left);
color: #77498fab;
z-index: 20;
}
}
`;