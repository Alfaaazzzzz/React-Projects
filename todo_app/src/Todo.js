import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import './Todo.css'

function Todo(props) {
    return (
        <List className='Todo__List'>
            <ListItem>
                <ListItemAvatar>

                </ListItemAvatar>
                <ListItemText primary='Todo' secondary={props.text}/>
            </ListItem>
        </List>
    )
}

export default Todo
