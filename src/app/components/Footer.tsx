import '../../../public/styles/styles.css';
import '../../../public/styles/index.css';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="flex justify-center space-x-4 mb-2 my-20">
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                    <img src="./images/github.png" alt="GitHub" className="social-icon h-8 w-8 md:h-10 md:w-10" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img className="imagenFootln h-8 w-8 md:h-10 md:w-10" alt="LinkedIn" src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" />
                </a>
            </div>
            <p className="text-center mb-10">&copy; 2024</p>
        </footer>
    )
}

export default Footer;
