import React from 'react'
import "../page.css"
import { Link } from 'react-router-dom'
import banner from "./assets/imagenes/banner.png"

export default function Navbar() {
    return (
        <div>
            <nav className='navegador'>
                <ul className='navegador-list'>
                    <li><Link to="/">Productos</Link></li>
                    <li><Link to="/productos/alimento">Alimento</Link></li>
                    <li><Link to="/productos/juguetes">Juguetes</Link></li>
                    <li><Link to="/productos/antipulgas">Antipulgas</Link></li>
                    <li><Link to="/productos/higiene">Higiene</Link></li> 
                </ul>
            </nav>
            
        </div>
    )}