import React, { useContext } from "react";
import { BiCartAdd } from "react-icons/bi";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalCart, addItem, film } = useContext(CartContext);

  const handleAddToCart = () => {
    // Aquí puedes llamar a la función addItem del contexto para agregar una película al carrito
    const filmToAdd = {
      id: 1, // ID de la película que deseas agregar
      nombre: "Título de la película", // Nombre de la película que deseas agregar
      precio: 10, // Precio de la película que deseas agregar
      image: "imagen.jpg", // URL de la imagen de la película que deseas agregar
      cantidad: 1, // Cantidad de la película que deseas agregar
    };
    addItem(filmToAdd, filmToAdd.cantidad);
  };

  
  const onAdd= (quantity)=>{
    ('comprastes ${quantity} unidades');
     }

  return (
    <div>
      <button onClick={handleAddToCart}>
      < BiCartAdd>
        <Link
          to="/Cart"
          className="CartWidget"
          style={{ display: totalCart > 0 ? "block" : "none" }}
          
         
        >
          
      
        <p>0</p>
          <span>{totalCart}</span>
        </Link>
        <p> {totalCart} {onAdd} </p>
        </BiCartAdd>
      </button>
    
      {film && (
        <div>
          <h1>Película adquirida</h1>
          <ul>
            <li>{film.id}</li>
            <li>{film.nombre}</li>
            <li>{film.precio}</li>
            <li>{film.image}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartWidget;





  
       
            {/*<Link  to = '/Cart'className="CartWidget" style ={{display:totalCart>0? 'block' :'none'}}>
                {totalCart}
    </Link>*/}

    
{/*<ItemCount initial ={0} StockDeFilms={6} onAdd={onAdd} />*/}


