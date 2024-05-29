import './contact.css'
import mail from '../../../assets/email.png'
import github from '../../../assets/github.png'
import linkedin from '../../../assets/linkedin.png'
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div>
            <section id='contact'>
                <span className='contact-title font bold'>Contact</span>
                <div className='contact-container border'>
                    <div className='contact-mail-container'>
                        <img src={mail}></img>
                        <span className='font'>glnygl94@gmail.com</span>
                    </div>
                    <div className='contact-link-container'>
                        <img src={github}></img>
                        <Link to={'https://github.com/glnygl'} target="_blank">Github</Link>
                    </div>
                    <div className='contact-link-container'>
                        <img src={linkedin}></img>
                        <Link to={'https://www.linkedin.com/in/glnygl/'} target="_blank">LinkedIn</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}