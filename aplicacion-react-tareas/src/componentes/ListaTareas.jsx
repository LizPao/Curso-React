import React, { useState } from 'react'
import '../hojas-de-estilo/ListaTareas.css'
import TareaFormulario from './TareaFormulario'
import Tarea from '../componentes/Tarea'


const ListaTareas = () => {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea =>{
        console.log(tarea)
        /*Si la cadena no esta vacia */
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();/*le quito los espacios en blaNCO */
            const tareasActualizadas = [tarea, ...tareas]; /*genero un arr con todas las tareas anteriaores (...tareas) y la tarea nueva(tarea) */
            setTareas(tareasActualizadas);/*actualizo el estado*/
        }
    }

    const eliminarTarea = id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id =>{
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }
    return (
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className='tareas-lista-contenedor'>
                {/*Renderizar una lista de cpmponentes , tarea es un obj*/}
                {
                    tareas.map((tarea)=>
                    <Tarea 
                        key={tarea.id} /*para que react sepa el orden y no los cambie al actualizar, no se puede acceder a key como un props*/
                        id={tarea.id} /* */
                        texto={tarea.texto}
                        completada={tarea.completada}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}
                    />
                    )
                }
            </div>
        </>
    )
}

export default ListaTareas