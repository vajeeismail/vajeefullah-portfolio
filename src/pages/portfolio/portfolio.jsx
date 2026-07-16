import { useState } from "react";

import Hero from "../../components/Hero/Hero";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import projects from "../../data/projects";

import "./Portfolio.css";

function Portfolio() {

    const [category, setCategory] = useState("all");

    const filteredProjects =
        category === "all"
            ? projects
            : projects.filter(
                (project) => project.category === category
            );

    return (
        <main className="portfolio">

            <div className="container">

                <Hero />

                <div className="portfolio-filter">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="all">All Projects</option>
                        <option value="software">Software Development</option>
                        <option value="uiux">UI / UX Design</option>
                        <option value="graphic">Graphic Design</option>
                    </select>

                </div>

                <ProjectGrid>

                    {filteredProjects.map((project) => (

                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            image={project.cover}
                            link={`/project/${project.slug}`}
                        />

                    ))}

                </ProjectGrid>

            </div>

        </main>
    );

}

export default Portfolio;