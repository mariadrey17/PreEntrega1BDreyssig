const IniciarSesion = ()=> {
return (
<div className="contenedor-Iniciarsesion">
    <h1>Iniciar Sesión</h1>

    <div className="contenedor-form" >
        <form>
        <div className="contenedor-datos-form">
                <label htmlFor="">Tu nickname</label>
                <input type="nickname"name="nickname" id="nickname "/>
            </div>
            <div className="contenedor-datos-form">
                <label htmlFor="">Email</label>
                <input type="email"name="email" id="email "/>
            </div>

            <div className="contenedor-datos-form">
                <label htmlFor="">Password</label>
                <input type="password"name="passclave" id="passclave"/>
            </div>
            <button id="btnsesion" className="btnisesion" type="submit" onClick={IniciarSesion}>Iniciar Sesión</button>
        </form>
    </div>

</div>
);

}
export default IniciarSesion;