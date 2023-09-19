import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Blog from "./pages/Blog";
import Layout from "./Layouts/Layout";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/blog" element={<Blog />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
