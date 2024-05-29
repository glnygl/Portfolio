import './projectItem.css'
import appstore from '../../assets/appstore.png'
import sodexoLogo from '../../assets/sodexo-plus.jpg'

export interface ProjectModel {
    id: number
    src: string
    title: string
    link: string
}

export type ProjectItemProps = {
    project: ProjectModel
}

export default function ProjectItem(props: ProjectItemProps) {

    const goToAppStore = () => {
        window.open(props.project.link, '_blank');
    }

    const getStoreClassName = () => {
        if (props.project.link.length == 0) {
            return 'hidden'
        }
        return 'projectItem-appstore'
    }

    const projectLogo = () => {
        if (props.project.src.length == 0) {
            return sodexoLogo
        }
        return props.project.src
    }

    return (
        <div className='projectItem-container border'>
            <img src={projectLogo()} className='projectItem-img'></img>
            <span className='projectItem-title font bold'>{props.project.title}</span>
            <img src={appstore} className={getStoreClassName()} onClick={goToAppStore}></img>
        </div>
    );
}