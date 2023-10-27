import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

export const ItemListContainer= () => {

    const [logos, setLogos] = useState([]);
    const categoria = useParams().categoria;


    useEffect (() =>{
        const productosRef = collection (db, "productos");

        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef || "el producto no está disponible";

        getDocs(q)
            .then((resp) =>{

                setLogos(
                    resp.docs.map((doc) =>{
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
    }, [categoria])

    return (
        <>
        <ItemList logos={logos}/>
        </>
    )
}

