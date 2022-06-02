import { BrowserRouter,Route,Routes} from "react-router-dom";
import { Template } from "./outlet";
import{ Home} from "../pages/home"
import {Shop} from "../pages/shop"
import {Contact} from '../pages/contact';
import {Login} from "../pages/login";
import { Register } from "../pages/logincss/register";

export function Rout(){


    return(
        <>
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Template></Template>}>
                    <Route exact path='/home'  element={<Home></Home>}></Route>
                    <Route exact path='/shop'  element={<Shop></Shop>}></Route>
                    <Route exact path='/contact-us' element={<Contact></Contact>}></Route>
                    <Route exact path='/login'  element={<Login></Login>}></Route>
                    <Route exact path="/register" element={<Register></Register>}></Route>
                    
                    
                    </Route>
            </Routes>
        </BrowserRouter>
        
        
        </>
    );
}