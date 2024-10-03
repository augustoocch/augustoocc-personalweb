'use client';
import '../../../public/styles/styles.css';
import '../../../public/styles/index.css';
import ProjectContainer from './ProjectContainer';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Landing() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      <header>
        <h1 className={`title text-4xl font-bold transition-opacity duration-1000 dark:text-gray-50 text-gray-700  ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Welcome to my portfolio</h1>
      </header>

      <section id="about" className={`py-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center mb-8">
          <figure>
            <img
              src="./images/perfil.svg"
              alt="Profile Picture"
              className="mx-auto rounded-full w-40 h-40 md:w-56 md:h-56 "
            />
          </figure>
          <h2 className="mt-4 text-3xl font-bold dark:text-white text-gray-800">Augusto Occhiuzzi</h2>
        </div>

        <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0 md:space-x-5">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex-1 h-64 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-3">About</h3>
              <p className="text-gray-600 dark:text-gray-50 mb-4">
                Here you will be able to see info about me, my career, and my growth.
              </p>
            </div>
            <button onClick={() => window.open('./files/AOcchiuzzi-short-cv English.pdf', '_blank')}
             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">
              Download CV
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex-1 h-64 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Experience</h3>
              <p className="text-gray-600 dark:text-gray-50 mb-4">
                With over 4 years of experience in software development, I have worked with Java, Node, and React.
                I specialize in backend development and microservices architecture with top technologies.
              </p>
            </div>
            <Link href="/experience" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">
              View Experience
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex-1 h-64 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Stack</h3>
              <p className="text-gray-600 dark:text-gray-50 mb-4">
                Backend based development. Proficient in Java, SpringBoot, and SQL. 
                Experienced with microservices architecture and Apache Kafka, Node and NestJs.
              </p>
            </div>
            <Link href='/stack' className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">
              View Stack
            </Link>
          </div>
        </div>
      </section>

      <section id="projects" className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2>Check the stuff I can do...</h2>
        <ProjectContainer
          title="Async Microservices with kafka"
          image="./images/microservice.png"
          description="A microservices architecture that uses Apache Kafka for asynchronous communication between services."
          link='https://github.com/augustoocch/url-shortlinker'
        />

        <ProjectContainer
          title="AI chat integrating OpenAi"
          image="./images/ai.png"
          description="A marketplace application that connects buyers and sellers. Built with Node.js and MongoDB."
          link='https://github.com/augustoocch/AI-GPT'
        />

        <ProjectContainer
          title="Reactive MS with Quarkus"
          image="./images/frontend.png"
          description="A web application that provides weather forecasts for any location. Built with React and OpenWeatherMap API."
          link='https://github.com/augustoocch/Customer-microServ-Quarkus-Framework'
        />
      </section>

    </div>
  )
}


export default Landing;