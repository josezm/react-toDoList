import React from 'react'

export const ListItem = ({todo, index, handleDelete, handleToggle}) => {
    return (
        <div className = 'list-item' key = {todo.id}>
            <strong> {index} </strong>
            <p 
                onClick = {()=> handleToggle(todo.id)}
                className = {todo.done ? 'complete' : ''}
            > 
                {todo.tarea}
            </p>
            <button 
                className = 'btn btn-danger'
                onClick = {()=> handleDelete(todo.id)}
            > 
                Delete
            </button>    
        </div>
    );
}
