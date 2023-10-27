import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import "../page.css"
import { Link } from 'react-router-dom';

export default function Carrito() {
    const {cart, total, handleCancel, handleConfirm, handleDelete} =useContext(CartContext);


    return (
        <div className='carrito-container'>
        <h1>Tu Carrito:</h1>
        <div className='logos'>
            {
                cart.map((prod) =>(
                    <div key={prod.id} className='logos-cuerpo'>
                        <img src={prod.image} alt="" width={150} height={150}/>
                        <h3>{prod.title}</h3>
                        <p>Precio unidad: {prod.precio} </p>
                        <p>Total: ${prod.precio * prod.cantidad} </p>
                        <p>Cantidad: {prod.cantidad} </p>
                        <button className='btn2' onClick={() => handleDelete(prod.id)} >Eliminar</button>
                    </div>
                ))
            }
        </div>
            
            
                { cart.length > 0 && 
                <>
                <h2>Precio Total: ${total()}</h2> 
                <div className='cart-btn'>
                <Link to="/checkout" className='btn1' onClick={handleConfirm} >Confirmar</Link>
                <button className='btn1' onClick={handleCancel}>Vaciar</button>
                </div>
                </> ||
                <h2>Tu Carrito está vacío</h2> 
                }
        </div>
    )
}
