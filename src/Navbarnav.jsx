import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbarnav = () => {
    return (
        <>
            <div >
                <div className='nameconatiner'>
                    <div style={{ marginLeft: '100px', color: 'white' }}>
                        <h3 className='titlename'>Triveni Abburi</h3>
                    </div>
                    <div className='navLinks'>
                        <Link to="/" className='linknames'>Home</Link>
                        <Link to="/About" className='linknames'>About</Link>
                        <Link to="/Skills" className='linknames'>Skills</Link>
                        <Link to="/Contact" className='linknames'>Contact</Link>
                        {/* <a href="#Home">Home</a>
                        <a href="#About">About</a>
                        <a href="#Skills">Skills</a>
                        <a href="#Contact">Contact</a> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbarnav;