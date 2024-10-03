'use client';
import { useEffect, useState } from 'react';

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <header className={`mt-24 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-3xl font-bold text-center">Experience and info...</h1>
      </header>

      <section className={`mt-8 max-w-5xl mx-auto p-4 mb-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Work Experience</h2>

            <div className="bg-white dark:bg-gray-800 p-6 h-56 rounded-lg shadow transition-opacity duration-1000">
              <h3 className="font-bold text-lg">Globant</h3>
              <p>Oct 2023 - Present | Ssr Java Developer</p>
              <ul className="list-disc list-inside mt-2">
                <li>Microservices with Spring, refactor and business logic corrections</li>
                <li>JPA, JDBC, SQL Server</li>
                <li>Dockerization & Jenkins deployment</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 mt-4 h-56 rounded-lg shadow transition-opacity duration-1000">
              <h3 className="font-bold text-lg">Arquant S.A</h3>
              <p>Feb 2022 - Oct 2023 | Software Developer</p>
              <ul className="list-disc list-inside mt-2">
                <li>Microservices with Java and Quarkus Framework</li>
                <li>Kubernetes environment (manual & automatic)</li>
                <li>Clusters, CI/CD with Argocd & GitLab pipelines</li>
                <li>Docker, AWS, GCP</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 mt-4 h-56 rounded-lg shadow transition-opacity duration-1000">
              <h3 className="font-bold text-lg">Prefectura Naval Argentina</h3>
              <p>March 2014 - Dec 2022</p>
              <ul className="list-disc list-inside mt-2">
                <li>Jr. Software Developer (2020-2022)</li>
                <li>Administrative Officer (2016-2020)</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Info & Contact</h2>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow transition-opacity duration-1000">
              <h3 className="font-bold text-lg">Languages</h3>
              <ul className="list-disc list-inside mt-2">
                <li>Spanish (Native)</li>
                <li>English (B2)</li>
                <li>Italian (A1)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 mt-4 rounded-lg shadow transition-opacity duration-1000">
              <h3 className="font-bold text-lg">Relevant Skills</h3>
              <ul className="list-disc list-inside mt-2">
                <li>Discipline</li>
                <li>Communication</li>
                <li>Proactive attitude</li>
                <li>Passion for development</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 mt-4 rounded-lg shadow transition-opacity duration-1000">
              <h3 className="font-bold text-lg">Links</h3>
              <p>Github: <a href="https://github.com/augustoocch" className="text-blue-500 dark:text-blue-300">github.com/augustoocch</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/augusto-occhiuzzi/" className="text-blue-500 dark:text-blue-300">linkedin.com/in/augusto-occhiuzzi</a></p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 mt-4 rounded-lg shadow transition-opacity duration-1000">
              <h3 className="font-bold text-lg">Contact</h3>
              <p>Email: augusto.occh@gmail.com</p>
              <p>Location: Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience;