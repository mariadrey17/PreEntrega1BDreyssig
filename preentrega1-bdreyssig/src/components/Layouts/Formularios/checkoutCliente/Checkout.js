import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Configurando la referencia a la colección de Firestore
const firestore = getFirestore();
const ordersCollectionRef = collection(firestore, "orden"); // Reemplazando 'orden' con el nombre de tu colección

function Checkout() {
  const [orderId, setOrderId] = useState("");
  const enviarOrden = () => {
    const orden = {
      comprador: { name: "", email: "" },
      filmName: [{ name: "skyrojo", price: 2000 }],
      TotalCart: 2000,
    };
    const db = getFirestore();
    const ordenesCollection = collection(db, "ordenes");

    addDoc(ordenesCollection, orden).then((id) => setOrderId(id));
  };

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [filmName, setFilmName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Creando un objeto con los valores del formulario
    const orderData = {
      clientName,
      email,
      filmName,
      quantity,
      deliveryDate,
    };

    try {
      // Agregando los valores a la colección de Firestore
      const docRef = await addDoc(ordersCollectionRef, orderData);
      console.log("Orden de compra enviada correctamente. ID:", docRef.id);

      // Reiniciando los campos del formulario después de enviar los valores
      setClientName("");
      setEmail("");
      setFilmName("");
      setQuantity("");
      setDeliveryDate("");
    } catch (error) {
      console.error("Error al enviar la orden de compra:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre delcomprador:
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Nombre del film:
        <input
          type="text"
          value={filmName}
          onChange={(e) => setFilmName(e.target.value)}
        />
      </label>
      <label>
        Cantidad:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <label>
        Fecha de entrega:
        <input
          type="date"
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
        />
      </label>

      <button type="submit">Enviar orden de compra</button>
    </form>
  );
}

export default Checkout;
