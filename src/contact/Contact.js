import React from "react"
import "./Contact.css"
const Contact = () =>{
    return (
        <div className = "contact-container">
            <div className="c-container">
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                        <i className="fa fa-map-marker"></i>
                        <div className="topic">Address</div>
                        <div className="text-one">56/1,Mamara Thottam,Ganapathy Nagar</div>
                        <div className="text-two">Coimbatore 06.</div>
                        </div>
                        <div className="phone details">
                        <i className="fa fa-phone"></i>
                        <div className="topic">Phone</div>
                        <div className="text-one">
                            +91 9788040444</div>
                        <div className="text-two">04222333718</div>
                        </div>
                        <div className="email details">
                        <i className="fa fa-envelope"></i>
                        <div className="topic">Email</div>
                        <div className="text-one">hilinetooling@rediffmail.com</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div><br/>
                        <p>If you need any help from me or any types of queries related to website, you can send me message from here. It's my pleasure to help you.</p><br/>
                        <form action="#">
                            <div className="input-box">
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Enter your email" />
                            </div>
                            <div className="input-box message-box">
                                <textarea placeholder="Enter your message"></textarea>
                            </div>
                            <div className="button">
                                <input type="button" value="Send Now" />
                            </div>
                            <a  style={{float:"right",textDecoration :"none",color:"#3e2093", marginTop:"25px"}} href="">back to home</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
