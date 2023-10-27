import { createContext, useEffect, useState } from "react"; // hook para crear contexto
import Swal from "sweetalert2";
import Checkout from "../components/Checkout";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(initialCart);


    const addToCart = (item, cantidad) => {

        if (cantidad > 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '¡Producto agregado al Carrito!',
                showConfirmButton: false,
                timer: 1000
            })
        } else {
            Swal.fire(
                '¡la cantidad debe ser mayor a cero!',
                '',
                'warning')
        }
        const addedItem = { ...item, cantidad }

        const newCart = [...cart]
        const isInCart = newCart.find((producto) => producto.id === addedItem.id);

        if (isInCart) {
            isInCart.cantidad += cantidad;
        } else {
            newCart.push(addedItem);
        }
        setCart(newCart);
    }
    const cartCount = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const total = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const numbers = Math.floor(Math.random() * 1000);

    const orden = () =>{
        let ordenNueva = JSON.parse(localStorage.getItem("numbers")) || [];
        localStorage.setItem("orden", JSON.stringify(numbers))
        return(numbers)
    }
    const handleConfirm = () => {
        Swal.fire(
            '¡Gracias por tu compra!',
            'te estamos dirigiendo al Check Out',
            'success'
        )
    }
    const handleCancel = () => {
        if (handleCancel) {
            Swal.fire({
                title: '¿Estas seguro?',
                text: "Esta opción vaciará tu carrito",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, vaciar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Carrito Vaciado',
                        '',
                        'success'
                    )
                    setCart([])
                }
            })
        }
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const handleDelete = (itemId) =>{
        let deleteItem = cart.filter((prod) => prod.id !== itemId)
        setCart(deleteItem)
    }

    const handleFinish = () => {
        Swal.fire(
            '¡Tu compra fue registrada!',
            'Revisa tu bandeja de correo para ver más información sobre el envío ',
            'success'
        )
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, cartCount, total, handleConfirm, handleCancel, handleFinish, handleDelete, orden}}>
            {children}
        </CartContext.Provider>
    )
}

//Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel. Es decir, la gracia de Context tiene que ver con pasar datos de una forma directa, y se usa para compartir datos que pueden considerarse “globales” para un árbol de componentes en React.