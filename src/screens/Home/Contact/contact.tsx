import './contact.css'
import mail from '../../../assets/email.png'
import linkedin from '../../../assets/linkedin.png'
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div>
            <section id='contact'>
                <span className='contact-title'>Contact</span>
                <div className='contact-container'>
                    <div className='contact-mail-container'>
                        <img src={mail}></img>
                        <span className='contact-mail'>glnygl94@gmail.com</span>
                    </div>
                    <div className='contact-linkedin-container'>
                        <img src={linkedin}></img>
                        <Link to={'https://www.linkedin.com/in/glnygl/'} target="_blank">LinkedIn</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}