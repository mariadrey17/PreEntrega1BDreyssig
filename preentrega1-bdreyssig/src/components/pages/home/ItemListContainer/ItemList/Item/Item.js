import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import "./Item.css";
const Item = ({ info }) => {
  const navigate = useNavigate();
  return (
    <div className="filmCardContainer">
      <div className="filmCard">
        <Container>
          <Card className="card" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={info.image} />
            <Card.Body>
              <Card.Text>{info.id}</Card.Text>
              <Card.Title>{info.nombre}</Card.Title>
              <Card.Title>{info.titulo}</Card.Title>
              <Card.Text>{info.genero}</Card.Text>

              <Card.Text className="descripcionText">
                {info.descripcion}
                {info.precio}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate(`/detalle/${info.id}`)}
              >
                ver detalle
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};
export default Item;
