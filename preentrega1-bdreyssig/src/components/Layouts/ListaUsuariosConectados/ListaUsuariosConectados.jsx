import React from "react";


function ListaUsuariosConectados (props) {
return (
    <div className="Listausuarios">
        <div>{props.name}</div>
        <div>{props.country}</div>
        
    </div>

);

}

export default ListaUsuariosConectados;