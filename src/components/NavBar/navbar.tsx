import { Link } from "react-router-dom";
import './navbar.css'
import logo from '../../assets/logo.png'
import { useEffect, useState } from "react";
import { useMediaQuery } from 'usehooks-ts'


export function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const matches = useMediaQuery('(min-width: 768px)');

    useEffect(() => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    }, [matches])

    return (
        <nav>
            <img src={logo} className="logo"></img>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }
            }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className= {menuOpen ? 'menu-nav-links' : 'nav-links'}>
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