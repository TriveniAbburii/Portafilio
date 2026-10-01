// import React from 'react'

// const Contact = () => {
//     return (
//         <>
//             <div >
//                 <h1 style={{ color: "white", fontSize: "50px" }}>Lets's Talk</h1>
//                 <p style={{ color: "white", fontSize: "20px" }}>contact to me with below details</p>
//                 <div style={{ display: 'flex', flexDirection: "column", gap: "20px" }}>
//                     <div style={{ backgroundColor: "white", width: "250px", borderRadius: "20px", padding: "5px" }}>
//                         <h2>Mobile Number</h2>
//                         <p>+ 917569356150</p>
//                     </div>
//                     <div style={{ backgroundColor: "white", width: "250px", borderRadius: "20px", padding: "5px" }}>
//                         <h2>Email</h2>
//                         <p>triveniabburitriveni@gmail.com</p>
//                     </div>
//                     <div style={{ backgroundColor: "white", width: "250px", borderRadius: "20px", padding: "5px" }}>
//                         <h2>address</h2>
//                         <p>Hyderabad,Ameerpet</p>
//                     </div>
//                 </div>
//                 <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                     <form>
//                         <div>
//                             <label style={{ color: "white" }}>Full Name:</label>
//                             <input type="Text" />
//                         </div>
//                         <div>
//                             <label style={{ color: "white" }}>Mobile Number:</label>
//                             <input type="number" />
//                         </div>
//                         <div>
//                             <label style={{ color: "white" }}>Email:</label>
//                             <input type="email" />
//                         </div>
//                         <div>
//                             <label style={{ color: "white" }}>Message</label>
//                             <textarea>
//                                 <input type="text" />
//                             </textarea>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Contact;



import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contactContainer" >

                <h1>Let's Talk</h1>
                <p>Contact me with below details</p>

                <div className="contactContent">

                    {/* Left Side */}
                    <div className="contactDetails">

                        <div className="contactCard">
                            <h2>Mobile Number</h2>
                            <p>+91 7569356150</p>
                        </div>

                        <div className="contactCard">
                            <h2>Email</h2>
                            <p>triveniabburitriveni@gmail.com</p>
                        </div>

                        <div className="contactCard">
                            <h2>Address</h2>
                            <p>Hyderabad, Ameerpet</p>
                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="contactForm">

                        <form>

                            <div className="formGroup">
                                <label>Full Name:</label>
                                <input type="text" placeholder='Enter Your Name'/>
                            </div>

                            <div className="formGroup">
                                <label>Mobile Number:</label>
                                <input type="number" placeholder='Enter Your Mobile Number'/>
                            </div>

                            <div className="formGroup">
                                <label>Email:</label>
                                <input type="email" placeholder='Enter Your Mail'/>
                            </div>

                            <div className="formGroup">
                                <label>Message:</label>
                                <textarea placeholder='message'></textarea>
                            </div>

                            <button type="submit">Send Message</button>

                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact