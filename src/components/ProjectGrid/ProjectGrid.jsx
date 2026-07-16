import "./ProjectGrid.css";

function ProjectGrid({ children }) {
    return (
        <div className="project-grid">
            {children}
        </div>
    );
}

export default ProjectGrid;