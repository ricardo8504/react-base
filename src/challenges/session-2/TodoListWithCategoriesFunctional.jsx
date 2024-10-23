import React, { useState, useEffect, useReducer } from 'react';

function todoListReducer(state, action) {
    if (action.type === "SET_CATEGORIES") {
        return {
            ...state,
            categories: action.payload
        };
    } else if (action.type === "ADD_TODO") {
        return {
            ...state,
            todos: [...state.todos, action.payload]
        };
    } else if (action.type === "REMOVE_TODO") {
        return {
            ...state,
            todos: state.todos.filter((todo, index) => index !== action.payload)
        };
    } else if (action.type === "SET_SELECTED_CATEGORY") {
        return {
            ...state,
            selectedCategory: action.payload
        };
    } else if (action.type === "SET_TODO") {
        return {
            ...state,   
            todo: action.payload
        };
    }    
    return state;
}


const TodoListWithCategoriesFunctional = () => {
    const [todoListState, todoListDispatch] = useReducer(todoListReducer, {
        categories: [],
        todos: [],
        selectedCategory: "",
        todo: ""
    });

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await fetch("http://localhost:3000/categories");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const categoriesJson = await response.json();
                todoListDispatch({ type: "SET_CATEGORIES", payload: categoriesJson });
                todoListDispatch({ type: "SET_SELECTED_CATEGORY", payload: categoriesJson.length > 0 ? categoriesJson[0].name : "" });
            } catch (error) {
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
        todoListDispatch({ type: "SET_TODO", payload: event.target.value });
    }

    function onChangeCategory(event) {
        todoListDispatch({ type: "SET_SELECTED_CATEGORY", payload: event.target.value });
    }

    function addTodo() {
        // is there any problem updating two states in the same function?
        todoListDispatch({ type: "ADD_TODO", payload: { todo: todoListState.todo, category: todoListState.selectedCategory } });
        todoListDispatch({ type: "SET_TODO", payload: "" });
    }

    function removeTodo(indexToRemove) {
        todoListDispatch({ type: "REMOVE_TODO", payload: indexToRemove });
    }

    return (
        <div>
            <h1>Todo List with Categories - Functional</h1>
            <section id='action-section'>
                <input type="text" value={todoListState.todo} onChange={onChangeTodo} placeholder="Add a new todo" />
                <select value={todoListState.selectedCategory} onChange={onChangeCategory}>
                    {
                        todoListState.categories && todoListState.categories.map((category) =>
                            (<option key={category.id} value={category.name}>{category.name}</option>))
                    }
                </select>
                <button onClick={addTodo}>Add</button>
            </section>
            <section id="todo-list-section">
                <ul>
                    {
                        todoListState.todos.map((todo, index) => (
                            <li key={index}>{todo.todo} - {todo.category}
                                <button onClick={() => removeTodo(index)}>X</button></li>
                        ))}
                </ul>
            </section>
        </div>
    );
};

export default TodoListWithCategoriesFunctional;
