export default function ProjectContainer({image, title, description}: {image: string, title: string, description: string}) {

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
                <button className="project-link">View Project</button>
            </div>
        </div>
    )
}