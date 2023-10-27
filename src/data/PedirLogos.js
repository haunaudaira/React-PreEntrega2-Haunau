import logos from "./data.json"

export const PedirLogos = () => {
    return new Promise( (resolve, reject) =>{
        setTimeout(() =>{
            resolve(logos)
        }, 200)
    })
}

export const pedirId = (id) =>{
    return new Promise ((resolve, reject) =>{

        const item = logos.find((el) => el.id === id) 

        if(item){
            resolve(item)
        }else{
            reject({
            error:"no se encontró el producto"
        })
        }
    })
}