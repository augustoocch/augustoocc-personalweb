import Link from "next/link";

export default function ProjectContainer({image, title, description, link}: {image: string, title: string, description: string, link: string}) {

    return (
        <div className="project dark:bg-gray-800">
            <h3>{title}</h3>
            <div>
                <figure className="project-div-img">
                    <img src={image} alt="Project 1 image" />
                </figure>
                <div>
                    <p>{description}</p>
                </div>
            </div>
            <div>
                <Link href={link} className="project-link">View Project</Link>
            </div>
        </div>
    )
}