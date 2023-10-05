import React, { useState } from 'react'
import { ItemCount } from './ItemCount'


export const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(0);

    const handleRestar= () =>{
        cantidad > 0 && setCantidad(cantidad - 1)
    }
    const handleSumar = () =>{
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const handleAdd = () =>{
        console.log({...item, cantidad})
    }

    return (
        <div className='logos'>
            <div >
                <div className='logos-cuerpo'>
                    <img src={item.image} alt={item.title} width={200} height={200} className='logoimg'/>
                    <h3 className='titulo'>{item.title}</h3>
                    <p className="description">{item.description}</p>
                    <h3 className="precio">${item.precio}</h3>
                    <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAdd={handleAdd} />
                </div>
            </div>
            
        </div>
    )
}
