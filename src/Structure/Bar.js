import styled from "styled-components";
import '../style.css';

export default function Bar({topic,status,text}){

    return(
       <Barstyle>
         <div className="fullcov">
         <div className="topic">{topic}</div>
       <div className="bar">
          <span>{text}&nbsp;&nbsp;&nbsp;</span>
         <div className="backbar"> 
         <div className="barspan" style={{width: status}}></div>
         </div>
       </div>
       </div>
       </Barstyle>
    )
    }
const Barstyle = styled.div`

color:wheat;
font-family: Impo,sans-serif;
font-size: 18px;
display: border-box;

.topic{
   margin-bottom: 3px;
}

.bar{
   width: 100%;
   display: flex;
   gap:5px;
}

.barspan{
      height: 6px;;
      background-color: #77498fab;
      border-radius: 5px;
}

.backbar{
   position: relative;
   width:80%;
   height:6px;
   background-color: #2e344e;
   border-radius: 5px;
}
`;
