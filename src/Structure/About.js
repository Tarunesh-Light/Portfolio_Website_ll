import styled from "styled-components";
import '../style.css';
import Sidebar from '../Structure/Sidebar.js';
import TT from '../static/Tarun_black_bgrnd.jpg';
import Button from '../Structure/Button.js';
import Hobbies from '../Structure/hobbies.js';
import webdev from '../static/icon_application_caching.svg';
import cloud from '../static/icon_cloud.svg';
import maths from '../static/icon_Cloud_Paas.svg';
import MenuIcon from '@material-ui/icons/Menu';
import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function About(){

    const [navigationToggler , setnavigationToggler] = useState(false);

    return (<>
    <Sidebar navigationToggler={navigationToggler} />
    <Aboutstyle>
    <div className="aboutcover">
    <div className="abouttitle">    
    <h1 className="about">&nbsp;About Me</h1> 
    <div className="imgtext">
    <img className="TT" src={TT}></img>
    </div>
    <div className="Abouttext">
     <div className="imgtext">
      <p className="text5"><span className="text6">Hello I am</span><span className="Name">&nbsp;Tarunesh Thangaraju</span></p>
      <br />
      <p className="text5">A passionate Full-Stack Developer who enjoys building 3D interactive websites.</p>
    <p className="text5">Currently broadening my Skills in Three Js and WebGL technologies.</p>
      <p className="text5">Do check on my GitHub for more Info.</p>  
      <br /> 
    </div>
     <div className="info">
       <p className="text5">Full Name&nbsp;:&nbsp;&nbsp;&nbsp;Tarunesh Thangaraju</p>
       <p className="text5">Age&nbsp;:&nbsp;&nbsp;&nbsp;23</p>
       <p className="text5">Nationality&nbsp;:&nbsp;&nbsp;&nbsp;Indian</p>
       <p className="text5">Languages&nbsp;:&nbsp;&nbsp;&nbsp;English,Tamil</p>
       <p className="text5">Location&nbsp;:&nbsp;&nbsp;&nbsp;Chennai</p>
       <p className="text5">Graduate(UG) College&nbsp;:&nbsp;&nbsp;&nbsp;PSG iTECH</p>
       <p className="text5">CGPA&nbsp;:&nbsp;&nbsp;&nbsp;8.68</p> 
     </div>
    </div> </div> 
    <h1 className="workexp1">Hobbies</h1>
    <div className="menu">
        <MenuIcon onClick={() => setnavigationToggler(!navigationToggler)} className="menuicon"></MenuIcon>
    </div>
    <Button className="button"></Button> 
    <div className="hobbies">
    <div>
    <Hobbies className="fullcov" image={webdev} topic={'Web Development'} content={'Create Dynamic Websites using tools like Wordpress,Hypertext Preprocessor,\n HTML,CSS etc., and develop \n cool CSS styling'}></Hobbies>
    </div>
    <div>
    <Hobbies image={cloud} topic={'3D-Interactive Website'} content={'3D Interactive website using:\n Webgl \n three js \n react-three-fibre'}></Hobbies>
    </div>
    <div>
    <Hobbies className="maths" image={maths} topic={'Mathematics'} content={'Enjoy spending my time in Mathematics.Always ready to learn and explore stuffs in Mathematics.Currently learning mathematical stuffs used for creating 3D Websites'}></Hobbies>
    </div>
    </div>
    <div className="space"></div>
    </div>
    </Aboutstyle>
    </>)
}

const Aboutstyle = styled.div`


margin-left: 270px;
height:100vh;
background-color: #10121A;
overflow: auto;
position: relative;
overflow-x: hidden;

.sidebar{
    position: relative;
}

.TT{
        width: 200px;
        border: 4px solid var(--border-color);
        border-radius: 8px;
        margin-right: 700px;
        margin-left: 20px;
}

.button{
    position: absolute;
    top: 10%;
    left: 10%;
    transform: translate(-top,-left);
}

.about,.imgtext,.info{
    font-family: Impo,sans-serif;
    font-size: 20px;
    color: wheat;
}

.space{
    height:100%;
    width:100%;
    position: absolute;
    top:270px;
}

.hobbies{
    width: 92%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    position: absolute;
    top: 100%;
    left: 4%;
    transform: translate(-top,-left);
}

.workexp1{
    font-size: 30px;
    letter-spacing: 1px;
    position: absolute;
    top: 89%;
    left: 6%;
    transform: translate(-top,-left);
    
}

.workexp1{
    font-family: Impo,sans-serif;
    font-size: 35px;
    color: wheat;
}

.Abouttext{
    margin-top: 49px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30%;
    left: 45%;
    transform: translate(-20%,-20%);
}

.about{
    margin-bottom: 30px;
    font-size: 50px;
    margin-left: 14px;
}

.fullcov,.maths{
    font-size: 1.3vw;
}

.abouttitle{
    position: absolute;
    top: 20%;
    left: 20%;
    transform: translate(-20%,-20%);
}

.Name{
    font-family: Imported;
    color: rgb(168, 157, 136);
    font-size: 43px;
    margin-bottom: 14px;
    padding: 0px;
}

.info{
    display: grid;
    grid-row-gap: 8px;
}

@media screen and (min-width:1250px){
.menuicon{
    font-size: 0px;
}
}

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

@media screen and (max-width:1250px){
    
    .abouttitle{
        position: absolute;
        top: 25%;
        left: 25%;
        transform: translate(-top,-left);
    }
    .workexp1{
        position: absolute;
        top: 86%;
    left: 11%;
        transform: translate(-top,-left);
    }

    .Abouttext{
    position: absolute;
    top: 35%;
    left: 43%;
    transform: translate(-20%,-20%);
    }

    .hobbies{
    width: 80%;
    position: absolute;
    top: 100%;
    left: 11%;
    transform: translate(-top,-left);
    }

    .Name{
        font-size: 5vw;
    }

    .maths{
        width: 10%;
    }
    .info,.text5{
    font-size: 1.5vw;
}

.TT{
        width: 19vw;
        border: 4px solid var(--border-color);
        border-radius: 8px;
        margin-right: 55vw;
        margin-left: 20px;
}
}

@media screen and (max-width:650px){
          
    .hobbies{
    width: 82%;
    display: grid;
    grid-row-gap: 10px;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    position: absolute;
    top: 100%;
    left: 11%;
    transform: translate(-top,-left);
}
}

@media screen and (max-width:500px){

.TT{
    position: absolute;
    width:60vw;
    top:-5vh;
    left:-10vw;
    transform: translate(-top,-left); 
    }

    .Name{
    position: absolute;
    width:100vw;
    top:20vh;
    left:-1vh;
    font-size: 12vw;
    transform: translate(-top,-left);
    }

    .about{
    position: absolute;
    top:-15vh;
    left:-20vw;
    font-size: 30px;
    width: 100vw;
    }
    .hobbies{
    width: 85%;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    position: absolute;
    grid-row-gap: 9px;
    top: 130%;
    left: 9%;
    transform: translate(-top,-left);
    margin-bottom: 30px;
}
   .maths{
    margin-right: 30px;
   }

   .fullcov,.maths{
    font-size: 3vw;
}

    .Abouttext{

    position: absolute;
    top:52vh;
    left:8vw;
    transform: translate(-top,-left);
    width: 60vw;
    }
    .workexp1{
    position: absolute;
    top:120vh;
    left:8vw;
    transform: translate(-top,-left);
    width: 60vw;
    
    }

    .text6{
        display: none;
    }
    .text5{
        font-size: 3vw;
    }
    .Name{
    position: absolute;
    width:100vw;
    top:50vh;
    left:-1vh;
    font-size: 12vw;
    transform: translate(-top,-left) !important;
    }


}

@media screen and (max-width:500px){
.Name{
    position: absolute;
    width:100vw;
    top:-7vh;
    left:-1vh;
    font-size: 12vw;
    transform: translate(-top,-left) !important;
    margin-bottom: 4px;
    }
}
`;