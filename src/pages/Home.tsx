import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Home() {

    return <div className="home-page d-flex flex-column justify-content-evenly align-items-center" style={{height: "calc(100vh - 72px)"}}>
        <p className="text-white text-center h1">
            <span className="text-shadow-red-sm">R</span>
            <span className="text-shadow-green-sm">G</span>
            <span className="text-shadow-blue-sm">B</span>
            <span>PARTS</span>
            </p>
        <p className="text-white text-center h1">Raise Your <span className="text-shadow-lblue-sm">SPECS</span></p>
        <Nav>
                <Nav.Link className="text-light" to="/store" as={NavLink}><Button variant="outline-light box-shadow-white">See Catalog</Button></Nav.Link>
            </Nav>
    </div>

}

export default Home;