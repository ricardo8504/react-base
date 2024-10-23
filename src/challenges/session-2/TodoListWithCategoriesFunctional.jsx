import React, { useState, useEffect } from 'react';


const TodoListWithCategoriesFunctional = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await fetch("http://localhost:3000/categories");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const categoriesJson = await response.json();
                setCategories(categoriesJson);
                setSelectedCategory(categoriesJson.length > 0 ? categoriesJson[0].name : "");
            } catch (error) {
                setError(error.message);
                console.error("Failed to fetch categories:", error);
            }
        };

        getCategories();
        return () => { 
            // cleanup
            console.log("cleanup component");
        };
    }, []);

    function onChangeTodo(event) {
        setTodo(event.target.value);
    }

    function onChangeCategory(event) {
        setSelectedCategory(event.target.value);
    }

    function addTodo() {
        // is there any problem updating two states in the same function?
        setTodos([...todos, { todo: todo, category: selectedCategory }]);
        setTodo("");
    }

    function removeTodo(indexToRemove) {
        setTodos(todos.filter((todo, indexTodo) => indexTodo !== indexToRemove));
    }




    return (
        <div>
            <h1>Todo List with Categories - Functional</h1>
            <section id='action-section'>
                <input type="text" value={todo} onChange={onChangeTodo} placeholder="Add a new todo" />
                <select value={selectedCategory} onChange={onChangeCategory}>
                    {
                        categories && categories.map((category) =>
                            (<option key={category.id} value={category.name}>{category.name}</option>))
                    }
                </select>
                <button onClick={addTodo}>Add</button>
            </section>
            <section id="todo-list-section">
                <ul>
                    {
                        todos.map((todo, index) => (
                            <li key={index}>{todo.todo} - {todo.category}
                                <button onClick={() => removeTodo(index)}>X</button></li>
                        ))}
                </ul>
            </section>
        </div>
    );
};

export default TodoListWithCategoriesFunctional;
