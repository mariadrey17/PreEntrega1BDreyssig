import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);



  const addItem =(item,quantity)
  if (!isInCar(item.id)) {
    setCart (prev=>[...prev,{...item,quantity}])
  } else {
    console.error ('el producto ya fue agregado')
  }


const removeItem=(id) => {
   const  cartUpdate=cart.filter(data=>data.id!==id)
setCart(cartUpdate)
}


const clearCart=()=>{
    setCart([])
}

const isInCart=(id)=>{
    return cart.some(data=>data.id===id)
}


return (
< CartContext.Provider value ={{cart,addItem,removeItem,clearCart}}/>
{children}
<CartContext.Provider/>
) 

};

