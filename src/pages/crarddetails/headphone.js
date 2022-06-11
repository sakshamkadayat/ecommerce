import { Container } from "react-bootstrap";
import sak from "../../pictures/headphone";
import "../crarddetails/headphone.css";
export function Headphone() {
  return (
    <>
      <div className="card">
        <div className="card-title">
          <h3>Headphone Details</h3>
        </div>

        <div className="picture">
        
          <img src={sak} height="500px" />
        
        </div>
       
            
        
      </div>
    </>
  );
}
