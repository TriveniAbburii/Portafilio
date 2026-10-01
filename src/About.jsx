import React from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendar,
    faFolder,
    faUsers,
    faLightbulb
} from '@fortawesome/free-solid-svg-icons';
const About = () => {
    return (
        <>
            <div className='AboutContainer' >
                <div className='content'>
                    <h1 className='nametitle'>Triveni Abburi</h1>
                    <h1 className='roletitle'> I am a Passionate Web Development
                        <br></br>and Mobile Development</h1>
                    <p className='aboutpara'>I specialize in building responsive and user-friendly web and mobile applications<br></br>
                        using React.js and React Native. I enjoy creating clean interfaces,<br></br>
                        developing reusable components, integrating REST APIs, and managing application state.</p>
                    <div className='listitems'>
                        <ul className='list'>
                            <li>Web Developement</li>
                            <li>Mobile Developement</li>
                            <li>React</li>



                        </ul>
                        <ul className='list'>
                            <li>Redux</li>
                            <li>Hooks</li>
                            <li>React Native</li>

                        </ul>
                        <ul className='list'>

                            <li>Basic SQL</li>
                            <li>Java</li>
                            <li>Basic Node Js</li>
                        </ul>
                    </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }} >
                    <div className='aboutbtns'>
                        <FontAwesomeIcon icon={faCalendar} style={{ width: "30px", height: "30px" }} />
                        <h1 className='count'>2 </h1>
                        <p className='ptag'>Years of Experince</p>
                    </div>
                    <div className='aboutbtns'>
                        <FontAwesomeIcon icon={faFolder} style={{ width: "30px", height: "30px", }} />
                        <h1 className='count'>5</h1>
                        <p className='ptag'>Projects</p>
                    </div>
                    <div className='aboutbtns'>
                        <FontAwesomeIcon icon={faUsers} style={{ width: "30px", height: "30px" }} />
                        <h1 className='count'>10</h1>
                        <p className='ptag'>Clients</p>
                    </div>
                    <div className='aboutbtns'>
                        <FontAwesomeIcon icon={faLightbulb} style={{ width: "30px", height: "30px" }} />
                        <h1 className='count'>10</h1>
                        <p className='ptag'>Skills</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;