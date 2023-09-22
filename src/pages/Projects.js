import '../App.scss';
import { useNavigate } from "react-router-dom";
import Dice from '../images/DiceGame.png'; 
import MachineAgents from '../images/MachineAgents.png'; 
import Slider from '../images/Slider.png'; 
import Task from '../images/Task.png'; 
import Vue from '../images/Vue.png'; 
import Friends from '../images/Friends.png'; 
import { RiArrowLeftCircleFill } from "react-icons/ri";
import project from '../models/project';
import { BsGithub } from "react-icons/bs";

// ehm how about using a json file to read this from instead, not possible, can't directly type in path to image anymore for some odd reason
let projects = [new project("simple dungeon dice", "https://jeff0167.github.io/Test/", "https://github.com/jeff0167/Test", Dice), 
new project("Friends app", "https://jeff0167.github.io/GUI_Project/", "https://github.com/jeff0167/GUI_Project", Friends),
new project("Friendly reminder app", "http://app.moedekjaer.dk/", "https://github.com/NullerGoej/Remory", Task),
new project("Simple vue application", "https://jeff0167.github.io/JavaScript-with-vue/", "https://github.com/jeff0167/JavaScript-with-vue", Vue),
new project("Machine agents playing vollyball", "https://jeff0167.github.io/VollyBall_ML-Agents/", "https://github.com/jeff0167/VollyBall_ML-Agents", MachineAgents),
new project("Ionic app with sliders and GPS", "https://jeff0167.github.io/ComponentMasterAndSlider/", "https://github.com/jeff0167/ComponentMasterAndSlider", Slider),
] 

function Projects() {

  let navigate = useNavigate();  // this is copy and pasted each time, not great
  const routeChange = () =>{ 
    let path; 
    navigate(path);
  }

  let content = projects.map(project =>{
      return (    
      <ion-col size="4" key={project.projectTitle}>
            <ion-card color="dark" class="card">
              <a href={project.projectLink}>
                <div class="imageZoom">
                    <img src={project.projectImagePath}/> 
                </div>
              </a>
                <ion-card-content class="myCenter">
                  {project.projectTitle}  
                  <a href={project.githubRepoLink}><BsGithub className='iconLink'></BsGithub></a>
                </ion-card-content>
            </ion-card>
      </ion-col>);
  });
  
  return (
    <div>
      <RiArrowLeftCircleFill class="backArrow" onClick={()=> navigate("../portfolio_bulma")}></RiArrowLeftCircleFill>
        <div class="container">
            <ion-grid>
                <ion-row>
                    {content}
                </ion-row>
            </ion-grid>
        </div>
    </div>
  );
}

export default Projects;