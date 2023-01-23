import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

import formatCurrency from "../utilities/formatCurrency";

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

function StoreItem({id, name, price, imgUrl}:StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    const quantity:number = getItemQuantity(id);
    return <>
        <Card className="h-100 text-white" style={{backgroundColor: "black"}}>
            <Card.Img variant="top" src={imgUrl} height="400px" style={{objectFit: "cover"}} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baselina mb-4">
                    <span className="fs-2 text-center">{name}</span>
                    <span className="ms-2 text-white text-shadow-white-sm">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? 
                    (<Button className="w-100 box-shadow-blue-sm" onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>) : 
                    (<div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
                        <div className="d-flex align-items-center justify-content-center" style={{gap: ".5rem"}}>
                        <Button className="box-shadow-blue-sm" onClick={() => decreaseCartQuantity(id)}>-</Button>
                        <div>
                            <span className="fs-3">{quantity}</span> in cart 
                        </div>
                        <Button className="box-shadow-blue-sm" onClick={() => increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button className="box-shadow-red-sm" variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                    </div>)}
                </div>
            </Card.Body>
        </Card>
    </>
}

export default StoreItem;