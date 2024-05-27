import './projectItem.css'


import logo from '../../assets/logo.png'

export interface ProjectModel {
    id: number
    src: string
    title: string
    link: string
}

export type ProjectItemProps = {
    project: ProjectModel
}

export default function ProjectItem(props: ProjectItemProps){
    return (
        <div className='projectItem-container'>
            <img src={logo} className='projects-img'></img>
            <span className='projectItem-title'>{props.project.title}</span>
        </div>
    );
}