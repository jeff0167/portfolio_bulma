import '../App.scss';
import { useNavigate } from "react-router-dom";
import Dice from '../images/DiceGame.PNG'; 
import MachineAgents from '../images/MachineAgents.PNG'; 
import Slider from '../images/Slider.PNG'; 
import Task from '../images/Task.PNG'; 
import Vue from '../images/Vue.PNG'; 
import Friends from '../images/Friends.PNG'; 
import { RiArrowLeftCircleFill } from "react-icons/ri";
import project from '../models/project';

// ehm how about using a json file to read this from instead, not possible, can't directly type in path to image anymore for some odd reason
let projects = [new project("simple dungeon dice", "https://jeff0167.github.io/Test/", Dice), 
new project("Friends app", "https://jeff0167.github.io/GUI_Project/", Friends),
new project("Friendly reminder app", "http://app.moedekjaer.dk/", Task),
new project("Simple vue application", "https://jeff0167.github.io/JavaScript-with-vue/", Vue),
new project("Machine agents playing vollyball", "https://jeff0167.github.io/VollyBall_ML-Agents/", MachineAgents),
new project("Ionic app with sliders and GPS", "https://jeff0167.github.io/ComponentMasterAndSlider/", Slider),
] 

function Projects() {

  let navigate = useNavigate();  // this is copy and pasted each time, not great
  const routeChange = () =>{ 
    let path; 
    navigate(path);
  }

  let content = projects.map(project =>{
      return (    
      <ion-col size="4">
          <a href={project.projectLink}>
            <ion-card color="dark" class="card" key={project.projectTitle}>
                <div class="imageZoom">
                    <img src={project.projectImagePath}/> 
                </div>
                <ion-card-content>{project.projectTitle}</ion-card-content>
            </ion-card>
          </a>
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