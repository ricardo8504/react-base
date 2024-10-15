import React from 'react';
import { useState } from "react";
const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [currentListValue, setCurrentListValue] = useState("");
    function addElementToTodoList() {
        setTodoList(prevList => {
           return [...prevList, currentListValue];
        });
        setCurrentListValue("");
    }

    function onChangeCurrentListValue(event){
        setCurrentListValue(event.target.value);
    }

    function removeElementFromTodoList(indexToRemove) {
        setTodoList(prevList => prevList.filter((_, index) => index !== indexToRemove))
    }

    return (
        <section className="w-full">
            <section>
                <input type="text" value={currentListValue} onChange={onChangeCurrentListValue} placeholder="Add a new todo"/>
                <button onClick={addElementToTodoList}>Add</button>
            </section>
            <section>
                <ul>
                    {todoList.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => removeElementFromTodoList(index)}>X</button>
                        </li>
                    ))}
                    
                </ul>
            </section>
        </section>
    );
}

export default TodoList;
