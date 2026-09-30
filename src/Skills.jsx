import React from 'react'
import ReactImg from './assests/Reactmage.png';
import htmlimg from './assests/html.png';
import Cssimg from './assests/css.png';
import jsimg from './assests/js.png';
import javaimg from './assests/java.png';
import ReactNative from './assests/ReactNative.png';
import SQL from './assests/SQL.png';
const Skills = () => {
    return (
        <>

            <div style={{ position: 'absolute', marginLeft: "200px", marginTop: "30px", }} >
                <h1 className='skills'>My Skills</h1>

                <p className='techs'>Technologies & Tools Work With</p>
                <div style={{ display: "grid", gridTemplateColumns: 'repeat(4,1fr)', gap: "60px" }}>

                    <div className='skillsbtn' >
                        <img src={htmlimg} className='skillsicons' />
                        <p>HTML</p>
                    </div>
                    <div className='skillsbtn' >
                        <img src={Cssimg} className='skillsicons' />
                        <p>CSS</p>
                    </div>
                    <div className='skillsbtn' >
                        <img src={jsimg} className='skillsicons' />
                        <p>Javascript</p>
                    </div>
                    <div className='skillsbtn' >
                        <img src={ReactImg} className='skillsicons' />
                        <p>React.js</p>
                    </div>
                    <div className='skillsbtn' >
                        <img src={ReactImg} className='skillsicons' />
                        <p>React Redux</p>
                    </div>
                    <div className='skillsbtn' >
                        <img src={ReactImg} className='skillsicons' />
                        <p>React Hooks</p>
                    </div>
                    <div className='skillsbtn' >
                        <img src={ReactNative} className='skillsicons' />
                        <p>React Native</p>
                    </div>
                    <div className='skillsbtn' >
                        <img src={javaimg} className='skillsicons' />
                        <p>Java</p>
                    </div>
                    <div className='skillsbtn' >
                        <img src={SQL} className='skillsicons' />
                        <p>Basic Knowledge on SQL</p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Skills;