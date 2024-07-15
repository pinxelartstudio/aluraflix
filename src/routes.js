import Cabecera from "components/cabecera/Cabecera";
import Container from "components/Container";
import Pie from "components/Pie";
import NuevoVideo from "components/NuevoVideo";

const { default: Inicio } = require("pages/inicio");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes(){
    return(
        <BrowserRouter>
        <Cabecera/>
        <Container>
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/NuevoVideo" element={<NuevoVideo/>}></Route>
        </Routes>
        </Container>
        <Pie/>
        </BrowserRouter>
    )
}

export default AppRoutes;