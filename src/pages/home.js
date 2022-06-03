import "./cssdesign/home.css";
import image from "../pictures/png.png";
export function Home() {
  return (
    <>
              <div className="picture">
               
                <img src={image} width={800} height={500}></img>
              </div>
    </>
  );
}
