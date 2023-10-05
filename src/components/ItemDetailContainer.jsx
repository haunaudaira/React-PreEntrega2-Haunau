import React, { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail';
import { pedirId } from '../data/PedirLogos';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {

    const [item, setItem] = useState(null);

    const id = useParams().id; //devuelve valor como string

    useEffect(() => {
        pedirId(Number(id))
        .then((res) =>{
            setItem(res);
        })
    }, [id])
    
    return (
        <div>
            {item && <ItemDetail item={item}/>}
        </div>
    )
}
