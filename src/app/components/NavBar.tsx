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
<nav className="bg-white py-4 border-b border-gray-200 fixed top-0 z-1000 w-full">
  <div className="flex items-center justify-between w-full px-6">
    {/* Menú UL */}
    <div className="w-full sm:w-auto">
      <ul className="flex gap-8 sm:gap-4 justify-start m-0 p-0 list-none">
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

    {/* Toggle */}
    <div className="flex justify-end w-auto">
      <input type="checkbox" id="theme-toggle" className="theme-toggle" ref={toggleButtonRef} />
      <label htmlFor="theme-toggle" className="toggle-slider"></label>
    </div>
  </div>
</nav>



    )
}

export default Header;

