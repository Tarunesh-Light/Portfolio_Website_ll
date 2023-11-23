import styled from "styled-components";
import '../style.css';
import React from 'react';

export default function hobbies({image,topic,content}){

    return(
       <Hobbystyle>
        <div className="fullcov">
            <div className="bar">
                <object className="webicon" width={110} data={image} alt=""></object>
                <p className="topic">{topic}&nbsp;&nbsp;&nbsp;</p>
                <div className="backbar"> 
                <p className="display-linebreak">{content}</p>
                </div>
            </div>
       </div>
       </Hobbystyle>
    )
    }

    
const Hobbystyle = styled.div`

.fullcov{
border-top: 5px solid #2e344e;
font-family: Impo,sans-serif;
font-size: 20px;
color: wheat;
background-color: #191D2B;
padding: 5px;
padding-left: 15px;
padding-top: 10px;
margin-right: 15px;
border-radius: 5px;
}

.fullcov:hover{
        border-top: 8px solid #191D2B;
        transform: translateY(3px);
    }


.display-linebreak {
white-space: pre-line;
padding-bottom: 15px;

}

object{
    width:12%;
    margin-bottom: 15px;
}

.topic{
    color:#77498fab;
    margin-bottom: 15px;
}

`;