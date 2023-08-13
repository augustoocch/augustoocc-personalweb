import AOS from 'aos';
import MultipleBlocks from '../layouts/MultipleBlocks';


AOS.init();


function Technologies() {


    const technologies = {
        java: ["estilo01", "src/assets/images/java.png", "Java", "Versatile and robust programming language, widely used for creating enterprise-level applications."],
        quarkus: ["estilo02", "src/assets/images/quarkus.png", "Quarkus", "Supersonic Subatomic Java framework, designed for cloud-native, lightweight, and efficient microservices."],
        spring: ["estilo03", "src/assets/images/spring.png", "SpringBoot", "Extension of the Spring framework, providing a streamlined way to create production-ready Java applications."],
        js: ["estilo01", "src/assets/images/js.png", "JavaScript", "Dynamic scripting language, essential for front-end web development, enabling interactive and responsive designs."],
        kubernetes: ["estilo02", "src/assets/images/kubernetes.png", "Kubernetes", "Open-source container orchestration platform, automating deployment, scaling, and management of applications."],
        react: ["estilo03", "src/assets/images/react.png", "React", "JavaScript library for building user interfaces, offering component-based development and dynamic rendering."],
        docker: ["estilo01", "src/assets/images/docker.png", "Docker", "Containerization tool simplifying application deployment by packaging apps and their dependencies in isolated environments."],
        sql: ["estilo02", "src/assets/images/mysql.png", "SQL", "Structured Query Language, used to manage and manipulate relational databases, facilitating data retrieval and manipulation."],
        cicd: ["estilo03", "src/assets/images/cicd.png", "CI/CD", "Continuous Integration and Continuous Deployment, practices automating software delivery pipelines, ensuring efficiency and quality."]
    }

    return(
        
        <div> 
            <h1  id="top-tech">Technologic stack</h1>  
            <MultipleBlocks
                techStack={technologies}
            />
        </div>                
    )
}


export default Technologies;
