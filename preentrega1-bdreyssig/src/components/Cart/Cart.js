import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    addItem,
    removeItem,
    clear,
    quantity,
    totalCart,
    someItemsCart,
  } = useContext(CartContext);

  if (totalCart === 0) {
    return (
      <div>
        <h1> No hay Items en el carrito</h1>
        <Link to="/" className="option">
          Top Recomendados
        </Link>
      </div>
    );
  }
};
