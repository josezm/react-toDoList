import React from 'react'
import { useForm } from '../hooks/useForm'

export const ListAdd = ({handleAddTodo}) => {

    const [{tarea}, handleInputChange, reset] = useForm({
        tarea : ''
    })

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(tarea.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            tarea: tarea,
            done: false,
        }

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <div className= 'agregar'>
            <form onSubmit = {handleSubmit}>
                <input 
                    className = 'form-control'
                    name = "tarea"
                    placeholder = "Nueva Tarea"
                    type= "text"
                    autoComplete = 'off'
                    onChange = {handleInputChange}
                    value = {tarea}
                />
                <br></br>
                <button type='submit' className = 'btn btn-primary'> Add </button>
            </form>
        </div>
    )
}
