import Link from "next/link";

export default function ProjectContainer({image, title, description, link}: {image: string, title: string, description: string, link: string}) {

    return (
        <div className="project dark:bg-gray-800">
            <h3 className="text-xl font-bold">{title}</h3>
            <div>
                <figure className="project-div-img">
                    <img src={image} alt="Project 1 image" />
                </figure>
                <div>
                    <p>{description}</p>
                </div>
            </div>
            <div>
                <Link href={link} className="project-link w-5/12 md:w-2/12">View Project</Link>
            </div>
        </div>
    )
}