import { BrowserRouter,Route,Routes} from "react-router-dom";
import { Template } from "./outlet";
import{ Home} from "../pages/home"
import {Shop} from "../pages/shop"
import {Contact} from '../pages/contact';
import {Login} from "../pages/login";
import { Register } from "../pages/logincss/register";
import { Error } from "../pages/error";
import { Cart } from "../pages/cart";

export function Rout(){


    return(
        <>
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Template></Template>}>
                    <Route  path='/'  element={<Home></Home>}></Route>
                    <Route  path='/home'  element={<Home></Home>}></Route>
                    <Route  path='/shop'  element={<Shop></Shop>}></Route>
                    <Route  path='/contact-us' element={<Contact></Contact>}></Route>
                    <Route  path='/login'  element={<Login></Login>}></Route>
                    <Route  path="/register" element={<Register></Register>}></Route>
                    <Route  path ="pages/cart.js"  element={<Cart></Cart>}></Route>                    
            
                    </Route>
                    <Route  path="*" element={<Error></Error>}></Route>
            </Routes>
        </BrowserRouter>
        
        
        </>
    );
}