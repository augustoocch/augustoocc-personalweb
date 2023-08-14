import AOS from 'aos';
import ProjectBlock from '../layouts/ProjectBlock';
import { useLayoutEffect } from 'react';


function Proj() {


    const projects = {
        quarkus: ["estilo01", "/images/microservice.png", "Quarkus microservice", "https://github.com/augustoocch/Product-microService-Quarkus-Framework"],
        react: ["estilo02", "/images/frontend.png", "React fontend", "https://github.com/augustoocch/augustoocc-personalweb"],
        spring: ["estilo03", "/images/microservice.png", "Springboot microservice", "https://github.com/augustoocch/microservice-match-spring3"],
        js: ["estilo01", "/images/market.png", "JavaScript marketplace with node", "https://github.com/augustoocch/market-place-nodejs"],
        ai: ["estilo02", "/images/ai.png", "AI chatbot with react and OpenAi API", "https://github.com/augustoocch/AI-GPT"],
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        
        <div> 
            <h1 >Projects</h1>  
            <ProjectBlock
                projectArray={projects}
            />
        </div>                
    )
}

export default Proj;