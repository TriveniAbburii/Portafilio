import React from 'react'
import Triveni from './assests/Triveni.jpg'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const Navigate = useNavigate();

    const handlenavigate = () => {
        Navigate('/Contact')
    }
    return (
        <>
            <div className='HomeContainer'>
                <div className='content'>
                    <h1 className='header'>Hi,I'm Triveni Abburi</h1>
                    <h1 className='header'>Web Developement && Mobile App Developement</h1>
                    <p className='header1'>I’m a React & React Native Developer with 2 years of experience<br></br>
                        building responsive web and mobile applications.<br></br>
                        <br />
                        I enjoy creating clean, user-friendly interfaces and developing<br></br>
                        scalable applications using modern frontend technologies.</p>
                    <div className='homebtns'>
                        <button className='btn'>Hire me</button>
                        <button className='btnconatct' onClick={handlenavigate}>Contact me</button>
                    </div>
                </div>
                <div>
                    <img src={Triveni} style={{ width: '300px', height: "300px", borderRadius: '100%',border:"15px solid #287be0"}} />
                </div>
            </div>
        </>
    )
}
export default Home;