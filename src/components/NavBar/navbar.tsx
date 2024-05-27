import { Link } from "react-router-dom";
import './navbar.css'
import logo from '../../assets/logo.png'
import { useEffect, useState } from "react";
import { useMediaQuery } from 'usehooks-ts'


export function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const minWidth = useMediaQuery('(min-width: 450px)');

    useEffect(() => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    }, [minWidth])

    return (
        <nav>
            <img src={logo} className="navBar-logo"></img>
            <div className="navBar-menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }
            }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className= {menuOpen ? 'navBar-menu--links' : 'navBar-links'}>
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