import { Button } from "bootstrap";
import React from "react";

import { BiCartAdd } from "react-icons/bi" ; 


export const CartWidget =()=>{
    return (
        <div>
    <button>
        < BiCartAdd></BiCartAdd>
        <p>0</p>
    </button>
    



        </div>

    
    );
}

export default CartWidget ;