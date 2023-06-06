import React from "react";
import ItemCount from "../ItemCount";


function ItemListContainer (props) {
return (
    <div>
        <h2>Hola {props.text}  </h2>

        <div>
            <ItemCount/>
        </div>
    </div>


);

}

export default ItemListContainer;