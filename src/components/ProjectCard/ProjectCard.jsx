import { useState } from "react";

import "./ProjectCard.css";

function ProjectCard({

    title,
    image,
    previewLink,
    previewType,
    responsive

}) {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {

        // No preview available
        if (!previewLink) {

            setShowModal(true);
            return;

        }

        // Desktop only project
        if (!responsive && window.innerWidth < 992) {

            setShowModal(true);
            return;

        }

        window.open(previewLink, "_blank");

    };

    const getButtonText = () => {

        switch (previewType) {

            case "github":
                return "View GitHub";

            case "figma":
                return "View Prototype";

            case "behance":
                return "View Case Study";

            default:
                return "Live Preview";

        }

    };


    return (

        <div
            className="project-card"
            onClick={handleClick}
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

                <button
                    className="project-button"
                    type="button"
                >
                    {getButtonText()} →
                </button>

            </div>

            {showModal && (

                <div
                    className="project-modal"
                    onClick={(e) => {

                        e.stopPropagation();
                        setShowModal(false);

                    }}
                >

                    <div
                        className="project-modal-box"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {

                            !previewLink ? (

                                <>

                                    <h2>
                                        Preview Coming Soon
                                    </h2>

                                    <p>
                                        This project preview is currently unavailable.
                                        <br />
                                        It will be published soon.
                                    </p>

                                </>

                            ) : (

                                <>

                                    <h2>
                                        Desktop Version Recommended
                                    </h2>

                                    <p>
                                        This project is currently optimized for desktop viewing.
                                        <br /><br />
                                        Please use a laptop or desktop for the best experience.
                                    </p>

                                </>

                            )

                        }

                        <button
                            className="modal-close"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>

                    </div>

                </div>

            )}

        </div>

    );

}

export default ProjectCard;