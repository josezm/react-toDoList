
import React, {useEffect, useReducer} from 'react'
import { List } from './components/List';
import { ListAdd } from './components/ListAdd';
import { ListItem } from './components/ListItem';
import { todoReducer } from './components/todoReducer';

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoListApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) =>{
        const action = {
            type : 'delete',
            payload: todoId,
        };
        dispatch(action);
    };

    const handleToggle = (todoId) => {
        const action = {
            type : 'toggle',
            payload : todoId,
        }
        dispatch(action);
    };

    const handleAddTodo = (newTodo) =>{
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <>
            <h1>ToDo List</h1>
            <hr/>

            <div className = 'row' >
                
                <div className = 'col-6'>
                    <List 
                        todos = {todos} 
                        handleDelete = {handleDelete}
                        handleToggle = {handleToggle}
                    />
                </div>

                <div className = 'col-1'></div>
                
                <div className = 'col-5'>
                    <h3> Add new task </h3>
                    <ListAdd handleAddTodo = {handleAddTodo}/>
                
                </div>
            </div>

        </>
    )
}
