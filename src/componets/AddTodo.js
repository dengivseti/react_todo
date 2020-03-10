import React from 'react'

export default ({addTodo, onChangeTodo, currentItem}) => {
    return (
        <form onSubmit={addTodo}>
            <div className="row">
                <div className="col col-sm-10">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Введите задачу"
                        value={currentItem}
                        onChange={event => onChangeTodo(event.target.value)}
                    />
                </div>
                <div className="col">
                    <button 
                        type="submit" 
                        className="btn btn-dark" 
                    >Добавить</button>
                </div>
            </div>
        </form>
    )
}