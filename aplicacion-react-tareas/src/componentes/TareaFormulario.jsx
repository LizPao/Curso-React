import React, {useState} from 'react'
import '../hojas-de-estilo/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid';

const TareaFormulario = (props) => {
    const [input, setInput] = useState('');

    const manejarCambio = (e) => {
        setInput(e.target.value); {/*extrae el valor del campo de texto que ingreso el usuario*/}
        console.log(e.target.value);
    }

    const manejarEnvio = (e) =>{
        e.preventDefault(); /*evita que la pag vuelva a cargar cuando envio el form */
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva); /*onsubmit= cuando se envia el form ONSUBMIT DE TAREA FORMULARIO*/ 
    }
    return (
        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>Agregar Tarea</button>
        </form>
        
    )
}

export default TareaFormulario