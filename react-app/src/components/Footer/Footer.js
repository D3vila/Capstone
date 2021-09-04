import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='footer__div'>
                <div className='logo'>
                </div>
                <a className='footer__logos linkedin' href='https://www.linkedin.com/in/antonio-davila-olivares-843856212/'>
                    <i className='fab fa-linkedin'></i>
                </a>
                <a className='footer__logos github' href='https://github.com/D3vila'>
                    <i className="fab fa-github-square"></i>
                </a>
                <a className='footer__logos repo' href='https://github.com/D3vila/Capstone'>
                    <i className="fas fa-laptop-code"></i>
                </a>
                <div className='creator__div'>
                    <h2>Constructed by Antonio Davila-Olivares in a week-long solo project</h2>
                </div>
            </div>
        </>
    )
}

export default Footer;
