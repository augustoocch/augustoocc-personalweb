import { useEffect, useRef } from 'react';
import Link from 'next/link';

function Header() {
    const toggleButtonRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        const toggleButton = toggleButtonRef.current;
        const body = document.body;

        const handleToggle = () => {
            body.classList.toggle('dark-mode');
            body.classList.toggle('dark');
        };
        if (toggleButton) {
            toggleButton.addEventListener('click', handleToggle);
        }
        return () => {
            if (toggleButton) {
                toggleButton.removeEventListener('click', handleToggle);
            }
        };
    }, []);

    return (
        <nav>
            <div className="nav-container">
                <div>
                    <ul>
                        <li>
                            <Link href="/home">About</Link>
                        </li>
                        <li>
                            <Link href="/experience">Experience</Link>
                        </li>
                        <li>
                            <Link href="/stack">Stack</Link>
                        </li>
                    </ul>
                </div>
                <div className="toggle-bar">
                    <input type="checkbox" id="theme-toggle" className="theme-toggle" ref={toggleButtonRef} />
                    <label htmlFor="theme-toggle" className="toggle-slider"></label>
                </div>
            </div>
        </nav>
    );
}

export default Header;
