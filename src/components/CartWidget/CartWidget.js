import "./CartWidget.css";
import cart from './cart.svg'


const CartWidget = () =>{
    return(
        <div>
            <img src={cart} alt="carrito" width={20} height={20} className="cart"/> 
            0 
        </div>
    )
}
export default CartWidget
