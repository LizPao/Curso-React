
import React, { useState } from 'react'
import TareaFormulario from './TareaFormulario'
import '../hojas-de-estilo/ListaTareas.css'
import Tarea from './Tarea';

const ListaTareas = () => {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) =>{
        if(tarea.texto.trim()){ //probando que la cadena no ete vacia
            tarea.texto = tarea.texto.trim();//quita los espacios en blanco
            const tareasActualizadas= [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }

    }

    const eliminarTarea = (id) =>{
        const tareasActualizadas = tareas.filter( tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = (id) =>{
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        })
        setTareas(tareasActualizadas)
    }

    return (
        <>{/*Frangmentos */}
            <TareaFormulario onSubmit = {agregarTarea} />
            <div className='tareas-lista-contenedor'>
                {/*renderizar una lista de componentes uso {}*/}
                {/*Cada tarea se va representar como un objeto en el arreglo => useState([])*/}
                {
                    tareas.map((tarea) =>
                        <Tarea 
                            key={tarea.id}//identifica ele en la lista y debe ser unico y no se pasa como props
                            id= {tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada} //paso como props
                            eliminarTarea={eliminarTarea} //paso como props
                            completarTarea={completarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaTareas