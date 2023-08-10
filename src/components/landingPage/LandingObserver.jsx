import { useRef } from "react";
import Observer from "./Observer";

function LandingObserver () {

    const root = document.getElementById("root");
    const projects = document.querySelector("#projects");

    console.log(techStack)
    
    const ref = useRef();
    const observer = Observer(techStack);


}


export default LandingObserver;