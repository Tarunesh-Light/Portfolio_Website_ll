import styled from "styled-components";
import '../style.css';
import { FormatItalic } from "@material-ui/icons";

export default function Experience({year,company,topic,text}){

    return(
        <Experiencestyle className="expppp">
                <div className="year">
                    <p>{year}</p>
                </div>
                <div className="linedivider"></div>
                <div className="textt">
                    <p><span className="purptext">Company: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{company}</span></p>
                    <p className="desig">Designation:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{topic}</p>
                    <div className="textparts">
                    <p className="work">Work:</p>
                    <p className="display-linebreak">{text}</p>
                    </div>
                    <br />
                                  
                </div>
                <br />

        </Experiencestyle>
)}

const Experiencestyle = styled.div`

font-family: Impo,sans-serif;
font-size: 20px;
color: wheat;
display: flex;

.display-linebreak {
white-space: pre-line;
}

.textparts{
    display: flex;
    gap:60px;
    width:600px;
}

.desig{
    padding-top: 5px;
    padding-bottom: 5px;
}

.purptext{
    color: #77498fab;
}

.year{
   width:90px;
}

.linedivider{
    border-top: 1px solid #2e344e;
    margin-top: 11px;
    margin-right: 50px;
    margin-left: 40px;
    width: 300px;
}

.textt{
    width:80%;
}

@media screen and (max-width:800px){
    .purptext,.desig,.work,.display-linebreak,.year{
       font-size:clamp(1px,2.5vw,100px);
    }

}

@media screen and (max-width:600px){
   
    flex-direction: column;
}
`;