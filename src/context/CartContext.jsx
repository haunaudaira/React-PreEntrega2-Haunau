import { createContext, useEffect, useState } from "react"; // hook para crear contexto
import Swal from "sweetalert2";

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

    const handleConfirm = () => {
        Swal.fire(
            '',
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

    const handleDelete = (itemId) =>{
        let deleteItem = cart.filter((prod) => prod.id !== itemId)
        setCart(deleteItem)
    }


    //como otra opción genere un numero aleatorio para usar como numero de orden

    const handleFinish = () => {
        setCart([])

        // let orderNumber = Math.floor(Math.random() * 1000);
        // localStorage.setItem('orden', orderNumber);

        localStorage.setItem("cart", JSON.stringify(cart))
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, cartCount, total, handleConfirm, handleCancel, handleFinish, handleDelete}}>
            {children}
        </CartContext.Provider>
    )
}
