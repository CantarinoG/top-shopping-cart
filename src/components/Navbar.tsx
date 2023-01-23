import { Button, Nav, Container, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

function Navbar() {

    const { openCart, cartQuantity } = useShoppingCart();

    return (
    <NavbarBs className="bg-dark mb-3" sticky="top">
        <Container>
            <Nav className="me-auto">
                <Nav.Link className="text-light" to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link className="text-light" to="/store" as={NavLink}>Store</Nav.Link>
                <Nav.Link className="text-light" to="/about" as={NavLink}>About</Nav.Link>
            </Nav>
            {cartQuantity > 0 && (<Button onClick={openCart} style={{ position: "relative", fontWeight: "bold" }}variant="outline-primary" className="rounded box-shadow-blue text-shadow-blue">
            Cart
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)"}}>{cartQuantity}</div>
            </Button>)}
        </Container>
    </NavbarBs>
    )
}

export default Navbar;