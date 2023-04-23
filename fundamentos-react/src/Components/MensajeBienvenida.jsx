const MensajeBienvenida = ({estadoUser}) => estadoUser ? <h3>Bienvenido al sitio!!</h3> : <h3>Offline</h3>;


export default MensajeBienvenida;