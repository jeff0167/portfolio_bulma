import '../App.scss';
import { useNavigate } from "react-router-dom";
import portrait from '../images/Portrait.jpg';
import project from '../images/Project.jpg'; // ever since building and deploying, you have to import the image, and using anything from the public folder is not allowed
import other from '../images/Rock2.jpg'; // and the routing is messed up

function HomePage() {  // shift + alt + f  to format

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path; 
      navigate(path);
    }

  return (
      <div>
        <code className="code">My portfolio</code>
        <div className="container">
            <ion-grid>
                <ion-row>
                    <ion-col size="4">
                        <ion-card color="dark" class="card" onClick={()=> navigate("about")} >
                            <div className="imageZoom">
                                <img alt="Portrait" src={portrait}/>
                                <ion-card-content>About me</ion-card-content>
                            </div>
                        </ion-card>
                    </ion-col>
                    <ion-col size="4">
                        <ion-card color="dark" class="card" onClick={()=> navigate("projects")}>
                            <div className="imageZoom">
                                <img alt="Portrait" src={project}/>
                                <ion-card-content>Projects</ion-card-content>
                            </div>
                        </ion-card>
                    </ion-col>
                    <ion-col size="4">
                        <ion-card color="dark" class="card">
                            <div className="imageZoom">
                                <img alt="Portrait" src={other}/>
                                <ion-card-content>Other</ion-card-content>
                            </div>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
    </div>
  );
}

export default HomePage;