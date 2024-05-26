import './home.css'
import pp from './../../assets/gg1.png'

export default function Home() {
    return (
        <div>
            <section id='home'>
                <div className="container">
                <img src={pp}className="pp"></img>
                <div className="text-container">
                    <span className="hello-text">Hello, I'm</span>
                    <span className="name-text">Gülenay</span>
                    <span className="role-text">Software Developer</span>
                </div>
                </div>
            </section>
        </div>
    );
}