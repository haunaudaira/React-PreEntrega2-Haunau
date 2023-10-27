import { Link } from "react-router-dom";
import "../../page.css";
import cart from '../assets/imagenes/cart.png'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartWidget = () =>{

    const {cartCount} = useContext(CartContext);
    return(
        <div className="cart-container">
            <Link to="/carrito" className="cart"> 
            <img src={cart} alt="carrito" width={30} height={30} className="cart"/> 
            <span className="cartcount">{cartCount()}</span>
            </Link>
        </div>
    )
}
export default CartWidget
