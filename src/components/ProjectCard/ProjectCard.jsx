import "./ProjectCard.css";

function ProjectCard({
    title,
    image,
    link = "#"
}) {

    return (

        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
        >

            <img
                src={image}
                alt={title}
                className="project-image"
            />

            <div className="project-overlay">

                <h3 className="project-title">
                    {title}
                </h3>

                <span className="project-button">
                    View Preview →
                </span>

            </div>

        </a>

    );

}

export default ProjectCard;