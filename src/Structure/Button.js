import styled from 'styled-components';
import '../style.css';

export default function Button(){
    return (
        <Buttonstyled>
        <div class="resumebutton">    
         <a class="resumedown">DOWNLOAD RESUME</a>
        </div> 
        </Buttonstyled>
    )
}


const Buttonstyled = styled.a`

.resumebutton{
    background-color: #7A3E9E;
    border-radius: 3px;
    position: absolute;
    top: 70%;
    left: 11%;
    transform: translate(-top,-left);
}

@media screen and (max-width:1250px){

    .resumebutton{
    display: none;
    position: absolute;
    width: 9.7vw;
    top:45vw;
    left: 21%;
    transform: translate(-top,-left);
}

    .resumedown{
        font-size: 1.4vw;
    }
}

@media screen and (max-width:1120px){

    .resumebutton{
    top:47vw;
    }
}

@media screen and (max-width:1060px){

.resumebutton{
top:49vw;
}
}

@media screen and (max-width:1060px){

.resumebutton{
top:49vw;
}
}

@media screen and (max-width:970px){

.resumebutton{
top:50vw;
}
}

@media screen and (max-width:880px){

.resumebutton{
top:52vw;
}
}

@media screen and (max-width:770px){

.resumebutton{
top:54vw;
}
}

@media screen and (max-width:670px){

.resumebutton{
top:57vw;
}
}

@media screen and (max-width:570px){

.resumebutton{
top:60vw;
}
}

@media screen and (max-width:470px){

.resumebutton{
top:62vw;
}
}

`;