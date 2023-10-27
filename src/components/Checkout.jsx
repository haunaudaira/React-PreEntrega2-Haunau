import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import "../page.css"
import { useForm } from 'react-hook-form';



export default function Checkout() {
    const { cart, total, handleFinish  } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    //captura los datos cargados en form y los guarda en ls 
    const submitForm = handleSubmit((data) => {
        console.log(data)
        localStorage.setItem("data", JSON.stringify(data))
        reset()
        submitForm && handleFinish()
    })


    return (
        <div className='checkout-container'>
            <div className='formitem-container' onSubmit={submitForm}>
                <form className='form-container'>

                    <div>   
                        <label className='nombre'> Nombre
                        <input type="text" name="nombre"
                            {...register("nombre", {
                                required: {
                                    value: true,
                                    message: "Este campo es requerido",
                                },
                                minLength: {
                                    value: 2,
                                    message: "debe incluir al menos 2 caracteres"
                                },
                            })} /> </label>
                            {errors.nombre && <span> {errors.nombre.message} </span>}
                    </div>

                    <div>   
                        <label className='apellido'> Apellido
                        <input type="text" name="apellido"
                            {...register("apellido", {
                                required: {
                                    value: true,
                                    message: "Este campo es requerido",
                                },
                                minLength: {
                                    value: 2,
                                    message: "debe incluir al menos 2 caracteres"
                                },
                            })}
                        /> </label> 
                        {errors.apellido && <span> {errors.apellido.message} </span>} 
                    </div>

                    <div> 
                        <label className='tlf'> Telefono 
                        <input type="number" name="tel"
                                {...register("tel", {
                                    required: {
                                        value: true,
                                        message: "Este campo es requerido",
                                    },
                                    pattern:{
                                        value: [0-9],
                                        message: "caracteres no válidos"
                                    }
                                })}/></label> 
                    {errors.tel && <span> {errors.tel.message} </span>}
                    </div>

                    <div>
                        <label className='email'> Correo Electrónico 
                        <input type="email" name="email"
                        {...register("email",{
                            required:{
                                value: true,
                                message: "este campo es requerido"
                            },
                            pattern:{
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Correo no válido",
                            }
                        })}
                        /></label>
                    {errors.email && <span> {errors.email.message} </span>}
                    </div> 

                    <div> 
                        <label className='email'> Repetir correo 
                        <input type="email" name="email"
                        {...register("email",{
                            required:{
                                value: true,
                                message: "este campo es requerido"
                            },
                            pattern:{
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Correo no válido",
                            }
                        })}/></label> 
                        {errors.email && <span> {errors.email.message} </span>}
                    </div>

                    <div> 
                        <label className='ciudad'> Ciudad
                        <input type="text" name="ciudad"
                            {...register("ciudad", {
                                required: {
                                    value: true,
                                    message: "Este campo es requerido",
                                },
                            })} /></label> 
                        {errors.ciudad && <span> {errors.ciudad.message} </span>} 
                    </div>

                    <div> 
                        <label className='direc'> Dirección
                        <input type="text" name="direc"
                            {...register("direc", {
                                required: {
                                    value: true,
                                    message: "Este campo es requerido",
                                },
                            })} /></label> 
                        {errors.direc && <span> {errors.direc.message} </span>} 
                    </div>

                    <div> 
                        <label className='tarj'> Tarjeta 
                        <input type="number" name="tarj"
                        {...register("tarj", {
                            required: {
                                value: true,
                                message: "Este campo es requerido",
                            },
                            minLength: {
                                value: 16,
                                message: "minimo 16 números"
                            },
                            pattern:{
                                value: [0-9],
                                message: "caracteres no válidos"
                            }
                        })}/></label> 
                        {errors.tarj && <span> {errors.tarj.message} </span>}
                    </div>

                    <label className='textarea'> Otras aclaraciones:<input type="text" /></label>
                </form>



                <div className='item-container'>
                    {
                        cart.map((prod) => (
                            <div key={prod.id}>
                                <div key={prod.id} className='items'>
                                    <img src={prod.image} alt="" width={50} height={50} />
                                    <h3>{prod.title}</h3>
                                    <p>Total: ${prod.precio * prod.cantidad} </p>
                                    <p>Cantidad: {prod.cantidad} </p>
                                </div>
                            </div>
                        ))
                    }
                    <h2 className='texto-cart'>Precio Total: ${total()}</h2>
                </div>
            </div>
            <button onClick={submitForm} className='btn1'> Finalizar Compra </button>
            <Link to="/" className='btn1'> Volver al Inicio </Link>
        </div>
    )
}
