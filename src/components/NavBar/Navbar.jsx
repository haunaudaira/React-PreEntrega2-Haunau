import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navegador'>
            <ul className='navegador-list'>
                <li><Link to="/">Productos</Link></li>
                <li><Link to="/productos/alimento">Alimento</Link></li>
                <li><Link to="/productos/juguetes">Juguetes</Link></li>
                <li><Link to="/productos/antipulgas">Antipulgas</Link></li>
                <li><Link to="/productos/higiene">Higiene</Link></li> 
            </ul>
        </nav>
    )}
    // en higiene todavia no hay nada cargado