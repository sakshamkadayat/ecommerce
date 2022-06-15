import "../pages/cssdesign/home.css";
import strawberry from "./productImg/1.png";
import onion from "./productImg/2.png";
import tomato from "./productImg/3.png";
import brinjal from "./productImg/4.png";
import bro from "./productImg/5.png";
import potato from "./productImg/6.png";
import Veg from ".././pictures/veg.jpg";
import { Container } from "react-bootstrap";

export function Home() {
  return (
    <> 
    <div className="text">
    <div className="container">
 <div className="banner">

<img src={Veg}></img>

</div>

</div>




<h3>Vegetable Product </h3>
<hr></hr>

    </div>


   
       <div className="cards">
         
        <div>
          <img src={bro}></img>
          <p>Broculi</p>
          <h1>Price: 200 RS /KG</h1>

          <a href="../pages/cart.js">
            <button>
             
              Buy now
            </button>
          </a>
        </div>

        <div>
          <img src={potato}></img>
          <p>potato</p>
          <h1>Price: 130 Rs/KG</h1>
          <a href="../pages/cart.js">
            <button>
             
              Buy now
            </button>
          </a>
        </div>

        <div>
          <img src={strawberry}></img>
          <p>watch</p>
          <h1>Price: 700 RS /KG</h1>
          <a href="../pages/cart.js">
            <button>
             
              Buy now
            </button>
          </a>
        </div>

        <div>
          <img src={tomato}></img>
          <p>tomato</p>
          <h1>Price: 120 RS/KG </h1>
          <a href="../pages/cart.js">
            <button>
             
              Buy now
            </button>
          </a>
        </div>
       
        
       </div>
    </>
  );
}
