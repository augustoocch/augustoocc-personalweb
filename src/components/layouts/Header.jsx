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
        window.addEventListener("resize", handleResize)
    })

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
                //<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            )}
            {!burgerMenu && (
                <i class="fa-solid fa-face-laugh-beam"></i>
            )}
            </button>
        </div>
        {(menuShown || !isMobile )&& (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto menu-desp">
            <div className="text-sm lg:flex-grow">
                <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 navlink" to={"/"}>
                    <span>About</span>
                </NavLink>
                <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 navlink" to={"/technology"}>
                    <span>Tech stack</span>
                </NavLink>
                <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 navlink" to={"/project"}>
                    <span>Projects</span>
                </NavLink>
                <NavLink className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 navlink" to={"/contact"}>
                    <span>Contact</span>
                </NavLink>
            </div>
        </div>
        )}
    </nav>

   
    )

}

export default Header;