import React from 'react'
import { useEffect, useState } from 'react';
import { PedirLogos } from '../data/PedirLogos';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer= () => {

    const [logos, setLogos] = useState([]);
    const categoria = useParams().categoria;

    useEffect (() =>{
        PedirLogos()
            .then((res) =>{
                if (categoria) {
                setLogos(res.filter((prod) => prod.categoria === categoria))
            }else{
                setLogos(res)
            }
            })
            .catch(error =>{
                console.error(error)
            })
    }, [categoria])

    return (
        <>
        <ItemList logos={logos}/>
        </>
    )
}

