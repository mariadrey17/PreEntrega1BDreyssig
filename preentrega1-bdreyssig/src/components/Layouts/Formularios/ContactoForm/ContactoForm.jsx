import ListaUsuariosConectados from "../../ListaUsuariosConectados/ListaUsuariosConectados";

const ContactoForm = ()=> {
    return (
    <div className="contenedor-Iniciarsesion">
        <h1>Contacto</h1>
    
        <div className="contenedor-form" >
            <form>
            <div className="contenedor-datos-form">
                    <label htmlFor="">Nombre</label>
                    <input type="text"name="name" id="name "/>
                </div>
                <div className="contenedor-datos-form">
                    <label htmlFor="">Email</label>
                    <input type="email"name="email" id="email "/>
                </div>
    
                <div className="contenedor-datos-form">
                    <label htmlFor="">Deja tu mensaje</label>
                    <textarea>Escribe aquí</textarea>
                </div>
                <button id="btnContacto" className="btnContacto" type="submit" onClick={ContactoForm}>Enviar</button>
            </form>
        </div>

        <br></br>
        <br></br>
        <br></br>

    <div>


        <h5>Users Conectados</h5>
        <div><ListaUsuariosConectados name="Soledad" country="Colombia"/>  </div>
        <div><ListaUsuariosConectados name="Jose" country="Argentina"/></div>
        <div><ListaUsuariosConectados name="Octavio" country="Brasil"/></div>
        <div> <ListaUsuariosConectados name="Sully" country="Colombia"/></div>
        <div>  <ListaUsuariosConectados name="Ana" country="España"/></div>




    </div>
    </div>

    
    );
    
    }
    export default ContactoForm;