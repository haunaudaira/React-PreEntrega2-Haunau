import React from 'react'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'
import NavBar from "../components/NavBar/Navbar"
import Header from "../components/Header/Header"
import "./home.css"
import Footer from '../components/Footer/Footer'
import ItemDetailContainer from '../components/ItemDetailContainer'

export default function Home() {
    return (
        <div className='body-home'>
            {/* <ItemListContainer /> */}
            {/* <ItemDetailContainer ItemId={2} /> */}
        </div>
    )
}
