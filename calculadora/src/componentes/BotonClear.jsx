import React from 'react'
import '../hojas-de-estilos/BotonClear.css'

const BotonClear = (props) => {
    return (
        <div className='btn-clear' onClick={props.manejarClear}>
            {props.children}
        </div>
    )
}

export default BotonClear