import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  const navigate = useNavigate();

  return (
    <div className="filmCardContainer">
      <div className="filmCard">
        {/* <p>{info.nombre} </p>
        <img src={info.image} className="filmCardImage" />
        <p>{info.genero}</p>
  <p>{info.precio}</p>*/}

        <Card className="card" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={info.image} />
          <Card.Body>
            <Card.Text>{info.id}</Card.Text>
            <Card.Title>{info.nombre}</Card.Title>
            <Card.Text>{info.genero}</Card.Text>
            <Card.Text>{info.descripcion}</Card.Text>
            <Card.Text>{info.precio}</Card.Text>
            <Link to={`/detalle/${info.id}`}>ver detalle</Link>
            <Link to={`/detalle/${info.id}`}>ver detalle</Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Item;
