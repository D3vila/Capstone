import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className='footer__div'>
                <div className='logo'>
                </div>
                <a className='footer__logos' href='https://www.linkedin.com/in/antonio-davila-olivares-843856212/'>
                    <i className='fab fa-linkedin'></i>
                </a>
                <a className='footer__logos' href='https://github.com/D3vila'>
                    <i className="fab fa-github-square"></i>
                </a>
                <a className='footer__logos' href='https://github.com/D3vila/Capstone'>
                    <i className="fas fa-laptop-code"></i>
                </a>
                <div>
                    <h2>Constructed by Antonio Davila-Olivares</h2>
                </div>
            </footer>
        </>
    )
}

export default Footer;
