import AOS from 'aos';
import Observer from './Observer';
import BlueBlock from '../layouts/BlueBlock';
import BlueLayout from '../layouts/BlueLayout';

AOS.init();


function Landing() {

    let title = "About me";
    let text = "Hello mate! Nice to see you here. I am a software developer specialized in backend technologies and my passion is to apport value to the world. You can find some info about me, my experience and the thech stack I work with. Have a nice day!";
    let blueBlock = new BlueBlock(title, text);
    
    let titleLayout ="Wanna know more?";
    let subtitleLayout ="Lets start then!";
    let block1 ="Technology stack";
    let block2 ="Projects";
    let blueLay = new BlueLayout(titleLayout, subtitleLayout, block1, block2);

    return(
        <div>
            <div className="perfil animate__animated animate__fadeInDownBig">
                <img className="perfil_imagen"src="src/assets/images/perfil.png" />
            </div>         

            {blueBlock}
            {blueLay}
            
        </div>                
    )
}


export default Landing;