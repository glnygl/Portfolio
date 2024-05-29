import './about.css'
import experince from './../../../assets/experience.png'
import education from './../../../assets/education.png'

export default function About() {
    return (
        <div>
            <section id='about'>
                <span className='about-title font bold'>About</span>
                <div className='about-container'>
                    <div className='about-item border'>
                        <img src={experince}></img>
                        <span className='about-item-title font bold'>Experience</span>
                        <span className='font'>5+ years iOS Development</span>
                    </div>
                    <div className='about-item border'>
                        <img src={education}></img>
                        <span className='about-item-title font bold'>Education</span>
                        <span className='font'>B.Sc. Bachelors Degree</span>
                    </div>
                </div>
            </section>
        </div>
    );
}