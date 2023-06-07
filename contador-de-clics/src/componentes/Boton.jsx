import React from "react";
import '../hojas-de-estilo/Boton.css'
{/*props   => desestructuracion dentro de las llaves escribo las propiedades que estoy pasando*/} 
const Boton = ( { texto, esBotonDeClic, manejarClic }) =>{
    return(
        <button className={esBotonDeClic ? 'btn-clic' : 'btn-reiniciar'}
        onClick={manejarClic}
        >
            {/*props.texto*/}
            {texto} 
        </button>
    );
}
export default Boton