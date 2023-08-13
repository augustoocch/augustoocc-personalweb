import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Header() {

    const [ isMobile, setIsMobile ] = useState(false);
    const [ menuShown, setMenu ] = useState(false);
    const [ burgerMenu, setBurgerMenu] = useState(true);

    const handleMenu = events => {
        setMenu(current => !current);
        setBurgerMenu(current => !current);
    }
 
    //choose the screen size 
    const handleResize = () => {
    if (window.innerWidth < 1024) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }}

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        handleResize(); // Initialize the menu state based on screen size
    }, []);

    // Reset the menu state when the route changes
    useEffect(() => {
        setMenu(false);
        setBurgerMenu(true);
    }, [location.pathname]);

    return( 

    <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <NavLink className="navlink" to={"/"}>
                <img src="src/assets/images/icon.ico" width="50px"/>
            </NavLink>
            <span className="ml-4">Augusto Occhiuzzi</span>
        </div>
        <div className="block lg:hidden">
            <button onClick={handleMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            {burgerMenu && (
                <i class="fa-solid fa-face-frown"></i>
            )}
            {!burgerMenu && (
                <i className="fa-solid fa-face-laugh-beam"></i>
            )}
            </button>
        </div>
        {(menuShown || !isMobile )&& (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto menu-desp ">
            <div className="text-sm lg:flex-grow flex justify-end">
                <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 navlink" to={"/#top"}>
                    <span>About</span>
                </NavLink>
                <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 navlink" to={"/technology#top"}>
                    <span>Tech stack</span>
                </NavLink>
                <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 navlink" to={"/projects#top"}>
                    <span>Projects</span>
                </NavLink>
                <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 navlink" to={"/contact#top"}>
                    <span>Contact</span>
                </NavLink>
            </div>
        </div>
        )}
    </nav>

   
    )

}

export default Header;