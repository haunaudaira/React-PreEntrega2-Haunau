import React, { useState } from 'react'
import "../page.css"

export const ItemCount = ({cantidad, handleRest, handleSuma, handleAdd}) => {

    return (
        <div className='contador-container'>
            <div className="item-count">
                <button onClick={handleRest} >-</button>
                <p>{cantidad}</p>
                <button onClick={handleSuma} >+</button>
            </div>
            <button className="addtocart" onClick={handleAdd} >Agregar al carrito</button>
        </div>
    )
}
