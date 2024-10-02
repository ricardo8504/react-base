const TodoList = () => {
    return (
        <section className="w-full">
            <section>
                <input type="text" placeholder="Add a new todo"/>
                <button>Add</button>
            </section>
            <section>
                <ul>
                    <li>
                        Sample Todo 
                        <button>X</button>
                    </li>
                </ul>
            </section>
        </section>
    );
}

export default TodoList;
