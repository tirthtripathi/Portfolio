import React, { useState } from "react";
import styles from "/src/components/Navbar/Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
    const [menuOpen, SetmenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/"><span>Tirth</span></a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={
                 menuOpen
                 ? getImageUrl("nav/closeIcon.png") 
                 : getImageUrl("nav/menuIcon.png")} 
                 alt="menu-button" onClick={() => SetmenuOpen(!menuOpen)} />
                <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`} onClick={() => SetmenuOpen(false)}>
                    <li>
                        <a href="#about"><img src={getImageUrl("nav/about.png")}/>About</a>
                    </li>
                    <li>
                        <a href="#skils"><img src={getImageUrl("nav/skills.png")}/>Skills</a>
                    </li>
                    <li>
                        <a href="#project"><img src={getImageUrl("nav/projects.png")}/>Project</a>
                    </li>
                    <li>
                        <a href="#contact"><img src={getImageUrl("nav/contact.png")}/>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;