import './home.css'
import pp from './../../assets/gg2.png'

export default function Home() {
    return (
        <div>
            <section id='home'>
                <div className="home-container">
                <img src={pp}className="home-pp"></img>
                <div className="home-text-container">
                    <span className="home-hello-text">Hello, I'm</span>
                    <span className="home-name-text bold">Gülenay</span>
                    <span className="home-role-text">Software Developer</span>
                </div>
                </div>
            </section>
        </div>
    );
}