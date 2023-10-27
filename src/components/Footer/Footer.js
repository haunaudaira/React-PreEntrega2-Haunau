import React from 'react'
import "../../page.css"
import facebook from "../assets/imagenes/redes/facebook.png"
import instagram from "../assets/imagenes/redes/instagram.png"
import twitter from "../assets/imagenes/redes/twitter.png"
import tarjetas from "../assets/imagenes/tarjetas/tarjetas.png"
import mp from "../assets/imagenes/tarjetas/mp.png"

export default function Footer() {
    return (
        <footer>
        <div className='redes'>
            <nav className='redes-logos'>
                <div className='redes-content'>
                    <p>¡Seguinos en nuestras redes!</p>
                    <a href='https://facebook.com'> <img src={facebook} width={30} height={29} /></a>
                    <a href='http://www.instagram.com'> <img src={instagram} width={25} height={27} /></a>
                    <a href='https://twitter.com'> <img src={twitter} width={25} height={23} /></a>
                </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26240.402287827314!2d-58.294037834712604!3d-34.70391158535722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a331fdc70bdd5d%3A0x6c702cf3f15dabac!2sBernal%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1696457304454!5m2!1ses!2sar" className='mapa-footer' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </nav>
            <div  className='mediodepago'>
                <img src={tarjetas} width={100} height={30}/> <img src={mp} width={100} height={30}/>
            </div>  

        </div>
        </footer>
    )
}


// export default function Footer() {

//     const [redes, setRedes] = useState();
//     console.log(redes)

//     const Redes = () =>{
//         return new Promise((resolve, reject) =>{
//             resolve(imgredes)
//         })
//     }

//     useEffect(() => {
//         Redes()
//             .then((res) =>{
//                 setRedes(res)
//             })

//     }, [])


// // //     return (
// // //         <div>
// // //             {redes.length > 0 && redes[0].img}
// // //         </div>
// // //     )
// }
