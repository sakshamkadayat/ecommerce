import iphone from "../pictures/ip.webp";
import "../pages/cssdesign/shop.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cart } from "./cart";
import { Container } from "react-bootstrap";
import  picture from "../pictures/pic3";
import pic5 from "../pictures/pic5";
import headphone from "../pictures/headphone";
import shoe from "../pictures/shoe";
import knife from "../pictures/knife";



export function Shop() {
  return (
    <>     
    <hr></hr>
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
          <img src={picture}></img>
          <p>OverTime</p>
          <h1>Price: 130 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>

        <div>
          <img src={pic5}></img>
          <p>watch</p>
          <h1>Price: 2500 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>

        <div>
          <img src={headphone}></img>
          <p>headphone</p>
          <h1>Price: 3500 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>
        
        <div>
          <img src={shoe}></img>
          <p>shoe</p>
          <h1>Price: 1800 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>

       


        <div>
          <img src={knife}></img>
          <p>Knife</p>
          <h1>Price: 280 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>



        <div>
          <img src={knife}></img>
          <p>Knife</p>
          <h1>Price: 280 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>


        <div>
          <img src={knife}></img>
          <p>Knife</p>
          <h1>Price: 280 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>

        <div>
          <img src={shoe}></img>
          <p>shoe</p>
          <h1>Price: 1800 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>

        <div>
          <img src={shoe}></img>
          <p>shoe</p>
          <h1>Price: 1800 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>

        <div>
          <img src={pic5}></img>
          <p>watch</p>
          <h1>Price: 2500 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>

        <div>
          <img src={headphone}></img>
          <p>headphone</p>
          <h1>Price: 3500 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>
        <div>
          <img src={pic5}></img>
          <p>watch</p>
          <h1>Price: 2500 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>

        <div>
          <img src={headphone}></img>
          <p>headphone</p>
          <h1>Price: 3500 NPR</h1>
          <a href="../pages/cart.js">
            <button>
              <FontAwesomeIcon icon={faHeart} />
              Buy now
            </button>
          </a>
        </div>
        <div>
          <img src={pic5}></img>
          <p>watch</p>
          <h1>Price: 2500 NPR</h1>
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
