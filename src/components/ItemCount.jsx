import React, { useState } from 'react'
import "../Item/item.css"

export const ItemCount = ({cantidad, handleRestar, handleSumar, handleAdd}) => {

    return (
        <div className='contador-container'>
            <div className="item-count">
                <button onClick={handleRestar} >-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar} >+</button>
            </div>
            <button className="addtocart" onClick={handleAdd} >Agregar al carrito</button>
        </div>
    )
}
