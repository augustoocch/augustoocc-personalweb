import AOS from 'aos';
import MultipleBlocks from '../layouts/MultipleBlocks';


AOS.init();


function Technologies() {


    const technologies = {
        java: ["estilo01", "src/assets/images/java.png", "Java", "One of the most important languajes to learn if you a re a developer"],
        quarkus: ["estilo02", "src/assets/images/quarkus.png", "Quarkus", "One of the most important languajes to learn if you a re a developer"],
        spring: ["estilo03", "src/assets/images/spring.png", "SpringBoot", "One of the most important languajes to learn if you a re a developer"],
        js: ["estilo01", "src/assets/images/js.png", "JavaScript", "One of the most important languajes to learn if you a re a developer"],
        kubernetes: ["estilo02", "src/assets/images/kubernetes.png", "Kubernetes", "One of the most important languajes to learn if you a re a developer"],
        react: ["estilo03", "src/assets/images/react.png", "React", "One of the most important languajes to learn if you a re a developer"],
        docker: ["estilo01", "src/assets/images/docker.png", "Docker", "One of the most important languajes to learn if you a re a developer"],
        sql: ["estilo02", "src/assets/images/mysql.png", "SQL", "One of the most important languajes to learn if you a re a developer"],
        cicd: ["estilo03", "src/assets/images/cicd.png", "CI/CD", "One of the most important languajes to learn if you a re a developer"]
    }

    return(
        
        <div> 
            <h1>Technologic stack</h1>  
            <MultipleBlocks 
                techStack={technologies}
            />
        </div>                
    )
}


export default Technologies;
