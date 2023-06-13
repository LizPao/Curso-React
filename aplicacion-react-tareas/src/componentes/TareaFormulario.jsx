
import React, { useState } from 'react'
import '../hojas-de-estilo/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid'

const TareaFormulario = (props) => {
    const [input, setInput] = useState('');

    const manejarCambio = (e) => {
        setInput(e.target.value); //extrae el valor del campo de texto que ingreso el user
    }

    const manejarEnvio = (e) => {
        e.preventDefault(); //para que la app no se vuelva a cargar
        const tareaNueva ={
            id:uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva); //permite agregar la lista de tarea al estado(onsumit de tareaform)
    }

    return (
        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <input 
                className='tarea-input' 
                type="text" 
                placeholder='Escribe una tarea' 
                name="texto"
                onChange={manejarCambio}
            />
            <button 
            className='tarea-boton'

            >
                Agregar Tarea
            </button>
        </form>
    )
}

export default TareaFormulario;