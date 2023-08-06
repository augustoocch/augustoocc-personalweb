import { useEffect, useState } from "react";

function Observer(element) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect( () => {
        const observer = new IntersectionObserver(([entry]) => 
            setIntersecting(entry.isIntersecting)
        );
        observer.observe(element.current);
        return () => {
            observer.disconnect();
        };
    }, [element]);
    
    return isIntersecting;

}

export default Observer;