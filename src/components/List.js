import React from 'react'
import { ListItem } from './ListItem';

export const List = ({todos, handleDelete, handleToggle}) => {
    return (
        <div>
            {
                todos.map((todo, i) => {
                    return(
                        <ListItem 
                            todo = {todo}
                            index = {i}
                            key = {todo.id}
                            handleDelete = {handleDelete}
                            handleToggle = {handleToggle}
                        />
                    );
                })
            }
        </div>
    )
}
