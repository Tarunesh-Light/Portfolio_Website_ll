import styled from "styled-components";
import '../style.css';
import Sidebar from '../Structure/Sidebar.js';
import HTML from '../static/Certificates/HTML_CSS.jpg';
import CodeIgniter from '../static/Certificates/CodeIgniter.jpg';
import JavaScript from '../static/Certificates/JavaScript.jpg';
import Flyers from '../static/Certificates/Flyers.jpg';
import Semester from '../static/Certificates/Semester_Rank_1.jpg';
import Hindi from '../static/Certificates/Hindi_Certificate.jpg';
import PLC from '../static/Certificates/PLC_Programming.jpg';
import MenuIcon from '@material-ui/icons/Menu';
import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function About(){

    const [navigationToggler , setnavigationToggler] = useState(false);

    return (<>
      <Sidebar navigationToggler={navigationToggler} />
    <Aboutstyle>
        <h1 className="certifications">Certifications</h1>
    <div className="certificate">
        <div>
           <img className="htmlcss" src={HTML}></img>
           <p className="certpara">&nbsp;Build Responsive Websites with HTML and CSS</p>
        </div>
        <div>
           <img className="CodeIgniter" src={CodeIgniter}></img>
           <p className="certpara">&nbsp;Complete Web Application</p>
        </div>
        <div>
           <img className="javascript" src={JavaScript}></img>
           <p className="certpara">&nbsp;Build Responsive Websites with HTML and CSS</p>
        </div>
        <div>
           <img className="flyers" src={Flyers}></img>
           <p className="certpara">&nbsp;Cambridge Yound Learners English</p>
        </div>
        <div>
           <img className="semester" src={Semester}></img>
           <p className="certpara">&nbsp;PSG ITECH SEMESTER FIRST RANK</p>
        </div>
        <div>
           <img className="plc" src={PLC}></img>
           <p className="certpara">&nbsp;PLC PROGRAMMING</p>
        </div>
        <div>
           <img className="hindi" src={Hindi}></img>
           <p className="certpara">&nbsp;PARICHAY EXAMINATION</p>
        </div>
    </div>  
    <div className="menu">
        <MenuIcon onClick={() => setnavigationToggler(!navigationToggler)} className="menuicon"></MenuIcon>
    </div>
    <div className="space"></div>
    </Aboutstyle>
    </>)
}

const Aboutstyle = styled.div`

position: relative;
margin-left: 270px;
height:100vh;
background-color: #10121A;
overflow: auto;

@media screen and (max-width:1300px){
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


.certifications{
    font-family: Impo,sans-serif;
    font-size: 20px;
    color: wheat;
}

.space{
    height:100%;
    width:100%;
    position: absolute;
    top:300px;
}

.certifications{
    font-size: 50px;
    position: absolute;
    top: 8%;
    left: 6%;
    transform: translate(-8%,-6%);
}

.certificate{
    position: absolute;
    top: 28%;
    left: 11%;
    transform: translate(-8%,-6%);
    display: grid;
    width: 85%;
    gap:29px;
    grid-template-columns: 1fr 1fr 1fr;
}

.certpara{
    color: black;
    font-family: Impo;
    font-size: 18px;
    background-color: #77498fab;
    width:300px;
}

@media screen and (max-width:1025px){

    .certificate{
    position: absolute;
    top: 35%;
    left: 20%;
    transform: translate(-8%,-6%);
    display: grid;
    width: 85%;
    gap:29px;
    grid-template-columns: 1fr 1fr;
    }

    
.certifications{
    font-size: 50px;
    position: absolute;
    top: 11%;
    left: 10%;
    transform: translate(-8%,-6%);
}

.menu{
    position: absolute;
    left: 90% ;
    top:13%;
    transform: translate(-top,-left);
    color: #77498fab;
    z-index: 20;
}}

@media screen and (max-width:750px){

.certificate{
position: absolute;
top: 45%;
left:35%;
transform: translate(-8%,-6%);
display: grid;
width: 85%;
gap:29px;
grid-template-columns: 1fr;
}


.certifications{
font-size: 50px;
position: absolute;
top: 11%;
left: 10%;
transform: translate(-8%,-6%);
}

.menu{
position: absolute;
left: 90% ;
top:12%;
transform: translate(-top,-left);
color: #77498fab;
z-index: 20;
}
}

@media screen and (max-width:500px){

.certificate{
position: absolute;
top: 43%;
left: 25%;
transform: translate(-8%,-6%);
display: grid;
width: 85%;
gap:29px;
grid-template-columns: 1fr;
}

overflow-x: hidden;

.certifications{
font-size: 20px;
position: absolute;
top: 13%;
left: 10%;
transform: translate(-8%,-6%);
}

.menu{
position: absolute;
left: 87% ;
top:15%;
transform: translate(-top,-left);
color: #77498fab;
z-index: 20;
}
}

@media screen and (max-width:550px){

.certificate{
position: absolute;
top: 43%;
left: 25%;
transform: translate(-8%,-6%);
display: grid;
width: 85%;
gap:29px;
grid-template-columns: 1fr;
}

overflow-x: hidden;

img{
   width: 60vw;
}

.certifications{
font-size: 40px;
position: absolute;
top: 13%;
left: 10%;
transform: translate(-8%,-6%);
}

.menu{
position: absolute;
left: 87% ;
top:14%;
transform: translate(-top,-left);
color: #77498fab;
z-index: 20;
}

.certpara{
    color: black;
    font-family: Impo;
    font-size: 14px;
    background-color: #77498fab;
    width:60vw;
}
}

@media screen and (max-width:550px){
  
    .certifications{
font-size: 30px;
top: 14%;
left: 10%;
transform: translate(-8%,-6%);
}

.certificate{
position: absolute;
top: 40%;
left: 25%;
transform: translate(-8%,-6%);
display: grid;
width: 85%;
gap:29px;
grid-template-columns: 1fr;
}
}
`;
