import iphone from "../pictures/ip.webp";
import "../pages/cssdesign/shop.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cart } from "./cart";
import { Container } from "react-bootstrap";
export function Shop() {
  return (
    <>
    
       
      <div className="cards">
        <div>
          <img src={iphone}></img>
          <p>iphone 11</p>
          <h1>Price: 105000 NPR</h1>

          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>

        <div>
          <img src={iphone}></img>
          <p>iphone 11</p>
          <h1>Price: 105000 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>

        <div>
          <img src={iphone}></img>
          <p>iphone 11</p>
          <h1>Price: 105000 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>

        <div>
          <img src={iphone}></img>
          <p>iphone 11</p>
          <h1>Price: 105000 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>
        
        <div>
          <img src={iphone}></img>
          <p>iphone 11</p>
          <h1>Price: 105000 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>

       
      </div>
   
    </>
  );
}
