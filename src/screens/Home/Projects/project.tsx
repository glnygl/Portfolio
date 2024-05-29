import './project.css'
import projects from '../../../project.json'
import ProjectItem from '../../../components/ProjectItem/projectItem';

export default function Projects() {

    return (
        <section id='projects'>
            <span className='projects-title font bold'>Projects</span>
            <div className='projects-container'>
                {projects.data.map((project, index) =>
                    <div key={index} className='projects-item-container'>
                        <ProjectItem project={project}></ProjectItem>
                    </div>
                )}
            </div>
        </section>
    );
}
