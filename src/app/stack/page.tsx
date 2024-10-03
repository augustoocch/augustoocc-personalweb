'use client';
import SkillContainer from '../components/SkillContainer';
import { useEffect, useState } from 'react';

function Stack() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <header className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} >
        <h1 className="title text-4xl font-bold dark:text-white text-gray-700">Current Stack</h1>
      </header>

      <section className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className='mt-20'>
          <SkillContainer
            image="./images/java.png"
            title="Java"
            description="Proficient in Java programming language and object-oriented design principles."
            image2="./images/spring.png"
            title2="SpringBoot"
            description2="Experience with SpringBoot framework for building RESTful APIs and microservices."
          />

          <SkillContainer
            image="./images/docker.png"
            title="Docker"
            description="Experienced with Docker for containerization and deployment of applications."
            image2="./images/kubernetes.png"
            title2="Kubernetes"
            description2="Familiar with Kubernetes for container orchestration and management."
          />

          <SkillContainer
            image="./images/kafka.png"
            title="Apache Kafka"
            description="Familiar with Apache Kafka for building real-time data pipelines and streaming applications."
            image2="./images/nest.svg"
            title2="NestJs Framework"
            description2="Experience with NestJs framework for building scalable and modular applications."
          />

          <SkillContainer
            image="./images/sql.png"
            title="SQL"
            description="Proficient in SQL database management and design."
            image2="./images/quarkus.png"
            title2="Quarkus Framework"
            description2="Experience with Quarkus framework for building cloud-native applications."
          />

          <SkillContainer
            image="./images/react.png"
            title="React"
            description="Experienced with React library for building user interfaces and single-page applications."
            image2="./images/nextjs.png"
            title2="NextJs Framework"
            description2="Experienced with NextJs framework for building server-side rendered React applications."
          />

        </div>
      </section>
    </div>
  )
}

export default Stack