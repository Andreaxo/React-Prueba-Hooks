import { useEffect, useState } from "react"

export const UseEffect = () => {

    const [value,setValue] = useState(0);
    
    useEffect(() => {
        console.log('Se dispara el UseEffect');
        
        // El return se realiza en ciertas ocasiones
        // cuando hay que desconectar (de algun socket o api)

    }, [value]);


    return(
        <>
        <h1>UseEffect</h1>
        <h1>{value}</h1>
        <button onClick={() => setValue(value+1)}>Boton</button>
        
        </>
    )
}