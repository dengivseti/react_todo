import React from 'react'

export default ({todo, index, onToggle, onClose}) => {
    const classes = []
    if (todo.completed){
        classes.push('done')
    }

    return (
        <li className={`list-group-item ${classes.join(' ')}`}>
            <span onClick={onToggle}>
                <input 
                    type="checkbox" 
                    className="custom-control-input" 
                    checked={todo.completed}
                    onChange={onToggle}
                />
                {index + 1}&nbsp;
                {todo.title}
            </span>
            <button type="button" className="close jstodo" aria-label="Close" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
            </button>
        </li>
    )
}