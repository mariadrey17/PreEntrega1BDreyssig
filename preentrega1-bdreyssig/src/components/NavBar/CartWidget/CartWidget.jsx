import React, { useContext } from "react";
import { BiCartAdd } from "react-icons/bi";
import { CartContext } from "../../context/CartContext";
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





  
       
            {/*<Link  to = '/Cart'className="CartWidget" style ={{display:totalCart>0? 'block' :'none'}}>
                {totalCart}
    </Link>*/}

    
{/*<ItemCount initial ={0} StockDeFilms={6} onAdd={onAdd} />*/}


