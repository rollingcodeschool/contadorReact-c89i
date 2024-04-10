import { useState } from "react";

const Contador = () => {
    //aqui agrego la logica del componente
    // let numero = 10;
    //aqui me creo el state
    const [numero, setNumero] = useState(10);

    // const sumar = ()=>{
    //     // numero= numero + 1;
    //     setNumero(numero + 1)
    // }

    return (
        // aqui puedo agregar un poquito de logica
        <section className="text-center">
            {/* aqui va la zona del maquetado */}
            <h2 >Contador</h2>
            <p>{numero}</p>
            <button className='btn btn-primary me-2' onClick={()=> setNumero(numero + 1)}>+1</button>
            {/* tarea: agregar la funcion para restar el valor del state numero */}
            <button className='btn btn-danger'>-1</button>
        </section>
    );
};

export default Contador;