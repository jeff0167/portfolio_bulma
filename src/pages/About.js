import '../App.scss';
import { useNavigate } from "react-router-dom";
import resume from '../images/Resume_opaque.png';
import { RiArrowLeftCircleFill } from "react-icons/ri";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function About() { 

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path; 
    navigate(path);
  }

  return (
    <div>
        <RiArrowLeftCircleFill class="backArrow" onClick={()=> navigate("../portfolio_bulma")}></RiArrowLeftCircleFill>
        <div class="header">
            <div class="container">
                <ion-card color="transparent" class="card" style={{ width: '80rem'}}>
                    <img src={resume}/> 
                </ion-card>
            </div>
        </div>
        <div class="infoCard rightBottomCorner">
            <ion-card color="dark" style={{ width: '15rem' }}>
                <br></br>  <br></br>  <br></br>
                <a href="https://github.com/jeff0167"><BsGithub class="iconLink extraMarginLeft"></BsGithub></a>
                <a href="https://dk.linkedin.com/in/jeff-borch-christensen-13b7b81b7/da"><BsLinkedin class="iconLink"></BsLinkedin></a>
                <a href="https://github.com/jefferen"><BsGithub class="iconLink extraMarginLeft"></BsGithub></a>
                <br></br>  <br></br>  <br></br>  <br></br>
            </ion-card>
        </div>
    </div>
  );
}

export default About;