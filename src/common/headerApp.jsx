import React, { useState } from "react";
import "./headerApp.css";

function HeaderApp({ list, currentPage }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(currentPage);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (name) => {
        setActiveLink(name);
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div className="nav-bar">
            <div className="logo">
                <a href="../../index.html" className="logo-link">
                    <img src="../img/Logo BW.png" alt="Penrose Logo" className="logo-image" />
                </a>
            </div>
            <nav className={isMobileMenuOpen ? "mobile-menu-open" : ""}>
                <div className="nav-links">
                    <ul>
                        {list.map((e, i) => (
                            <li key={`${i}-th header item`}>
                                <a
                                    href={e.link}
                                    className={activeLink === e.name ? "active" : ""}
                                    onClick={() => handleLinkClick(e.name)}
                                >
                                    {e.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
                <div className="header-actions">
                    <a href="#" className="btn btn-2 btn-small">Sign In</a>
                </div>
            <button
                className={`mobile-nav-toggle ${isMobileMenuOpen ? "active" : ""}`}
                aria-label="Toggle navigation"
                onClick={toggleMobileMenu}
            >
                <span className="hamburger-icon"></span>
            </button>
        </div>
    );
}

export default HeaderApp;