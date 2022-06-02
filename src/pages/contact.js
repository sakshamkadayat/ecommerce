import { Container } from "react-bootstrap";
import "./logincss/contact.css";
export function Contact(){

return(<>
   
    <div className="main">
        <div className="container-i">
            <div className="image">
                <img src="contact.svg" alt=""/>
            </div>
            <div className="form-area">
                <h2>Contact US</h2>
                <form action="">
                    <input type="text" placeholder="Full Name"/>
                    <input type="email" placeholder="Email"/>
                    <removethis-textarea cols="30" rows="3" placeholder="Your Message">
                  </removethis-textarea>
                    <button  type="submit">Send Message</button>
                </form>
               
            </div>
        </div>
    </div>

 </>

);

}