import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="btn btn-outline-primary">
                    Inicio
                </Link>
                <Link to="/nosotros" className="btn btn-outline-primary">
                    Nosotros
                </Link>
                <Link to="/contacto" className="btn btn-outline-primary">
                    Contacto
                </Link>
                <Link to="/blog" className="btn btn-outline-primary">
                    Blog
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
