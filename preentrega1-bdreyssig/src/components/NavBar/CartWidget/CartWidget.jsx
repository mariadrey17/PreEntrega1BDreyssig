import React, { useContext } from "react";
import { BiCartAdd } from "react-icons/bi";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { someItemsCart} = useContext(CartContext);

  return (
    <div>
      <button   style={{ display: someItemsCart()> 0 ? "block" : "none" }}>
        <Link
          to="/Cart"
          className="CartWidget"
        
          
         
        >
      < BiCartAdd/>
          <span>{someItemsCart()}</span>
        
        </Link>
      
      </button>
    
      
    </div>
  );
};

export default CartWidget;