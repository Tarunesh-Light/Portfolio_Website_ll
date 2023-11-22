import styled from "styled-components";
import Tarunesh_Thangaraju from '../static/Tarunesh_Thangaraju.jpg';
import { NavLink } from "react-router-dom";
import '../style.css';


export default function Navigation(){
  
    return (<>
    <Navigationstyled>
        <div className="photo">
            <img className="image" src={Tarunesh_Thangaraju} alt="" />
            <p className="Name">Tarunesh</p>
        </div>
        <ul className="nav">
            <li>
                <NavLink className="home" to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink className="home" to="/about">About</NavLink>
            </li>
            <li>
                <NavLink className="home" to="/skills">Skills</NavLink>
            </li>
            <li>
                <NavLink className="home" to="/projects">Projects</NavLink>
            </li>
            <li>
                <NavLink className="home" to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink className="home" to="/certifications">Certifications</NavLink>
            </li>
        </ul>
        <footer className="copyright">
                <p className="para">&nbsp;&copy; Tarunesh Thangaraju | 2023 </p>
        </footer>
    </Navigationstyled>
    </>)
}

const Navigationstyled = styled.nav`

display: grid;
height: 100%;
grid-template-columns: 1fr;
grid-template-rows: 285px 3fr 1fr;
justify-items: center;
align-items: center;
border-right: 3px solid var(--border-color);

.nav{
display: grid;
gap:10px;
align-content: center;
justify-content: center;
list-style-type: none;
width:100%;
text-align: center;
border-bottom: 1px solid var(--border-color);
padding-bottom: 95px;
padding-top: 80px;

a{
    color: wheat;
    font-size: 20px;
}

.home{
    position: relative;
}

.home::after{
    content: '';
    height: 3px;
    width: 100%;
    left:0;
    margin-top: 26px;
    position: absolute;
    background: wheat;
    transform: scale(0,1);
}

.home:hover::after{
    opacity: 1;
    transform: scale(1,1);
    transition: transform 0.5s ease;
}

}

.photo{
    display: grid;
    justify-items: center;
    gap:10px;
    border-bottom: 1px solid var(--border-color);
    width: 100%;

    img{
        width: 60%;
        border: 5px solid var(--border-color);
        border-radius: 500px;
    }
}

.copyright{
    color: grey;
}

.para{
    font-size: 13px;
}

`;