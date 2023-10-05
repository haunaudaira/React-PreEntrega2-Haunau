import React from 'react'
import "./header.css"
import CartWidget from "../CartWidget/CartWidget"
import vetlogo from "../assets/imagenes/vetlogo/favicon-32x32.png"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='encabezado'>
            <ul className='encabezado-list'>
                <Link to='/' className='vetlogo'> <img src={vetlogo} alt="logo" /> VetCare Store</Link>
                <li><CartWidget /> </li>
            </ul>
        </div>
    )
}
