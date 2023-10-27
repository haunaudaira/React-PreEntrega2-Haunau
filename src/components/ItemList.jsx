import React from 'react'
import Item from './Item'
import banner from "./assets/imagenes/banner.png"

export const ItemList = ({logos}) => {
    return (
        <>
            
            <img src={banner} alt="banner"/>
            
            <div className="logos">
                {logos.map((log) => <Item  logos={log} key={log.id} /> )}
            </div>
        </>
    )
}

