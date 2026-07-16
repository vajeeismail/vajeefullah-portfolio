import Hero from "../../components/Hero/Hero";
import Folio from "../../components/Folio/Folio";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import projects from "../../data/projects";

import "./Portfolio.css";

function Portfolio() {

    const softwareProjects = projects.filter(
        (project) => project.category === "software"
    );

    return (
        <main className="portfolio">

            <div className="container">

                <Hero />

                <Folio title="Software Development">

                    <ProjectGrid>

                        {softwareProjects.map((project) => (

                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                image={project.cover}
                                link={`/project/${project.slug}`}
                            />

                        ))}

                    </ProjectGrid>

                </Folio>

                <Folio title="Creative Design">

                    <ProjectGrid>

                        {/* Creative Design Projects Coming Soon */}

                    </ProjectGrid>

                </Folio>

            </div>

        </main>
    );

}

export default Portfolio;