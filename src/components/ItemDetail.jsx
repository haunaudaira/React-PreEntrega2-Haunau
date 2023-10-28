import React, { useContext, useState } from 'react'
import { ItemCount } from './ItemCount'
import { CartContext } from '../context/CartContext';

//Acá adentro se encuentra toda la lógina de los botones -, + y agregar al carrito. Esta va a ser usada en ItemCount

export const ItemDetail = ({item}) => {

    const {cart, addToCart } = useContext(CartContext); 
    // console.log(cart)
    const [cantidad, setCantidad] = useState(0);

    const handleRest= () =>{
        cantidad > 0 && setCantidad(cantidad - 1)
    }
    const handleSuma = () =>{
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
            <div className='logos'>
                <div className='logos-cuerpo'>
                    <img src={item.image} alt={item.title} width={200} height={200} className='logoimg'/>
                    <h3 className='titulo'>{item.title}</h3>
                    <p className="description">{item.description}</p>
                    <h3 className="precio">${item.precio}</h3>
                    <ItemCount 
                    cantidad={cantidad} 
                    handleSuma={handleSuma} 
                    handleRest={handleRest} 
                    // acá uso una función anónima para poder llamar a los parametros requeridos
                    handleAdd={() => {addToCart(item, cantidad)}}/> 
                </div>
            </div>
    )
}
