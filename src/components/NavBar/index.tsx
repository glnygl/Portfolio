import { Link } from "react-router-dom";
import './style.css'

export function NavBar() {
    return (
        <nav>
            <ul className="nav-links">
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/experience'}>Experience</Link>
                </li>
                <li>
                    <Link to={'/projects'}>Projects</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}