import styled from "styled-components";
import '../style.css';
import Sidebar from '../Structure/Sidebar.js';
import HTML from '../static/Certificates/HTML_CSS.jpg';
import CodeIgniter from '../static/Certificates/CodeIgniter.jpg';
import JavaScript from '../static/Certificates/JavaScript.jpg';


export default function About(){

    return (<>
    <Sidebar></Sidebar>
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
    </div>  
    </Aboutstyle>
    </>)
}

const Aboutstyle = styled.div`

position: relative;
margin-left: 270px;
height:100vh;
background-color: #10121A;

.certifications{
    font-family: Impo,sans-serif;
    font-size: 20px;
    color: wheat;
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
    margin-right:30px ;
}

`;