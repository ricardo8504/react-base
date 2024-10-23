import React, { Component } from 'react';

class TodoListWithCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: "",
      selectedCategory: "",
      categories: []
    };
  }

  async componentDidMount() {
    const categories = await this.getCategories();
    this.setState({
      categories: categories,
      selectedCategory: categories.length > 0 ? categories[0].name : ""
    });
  }

  async getCategories() {
    const categories = await fetch("http://localhost:3000/categories");
    const categoriesJson = await categories.json() || [];
    return categoriesJson;
  }

  onChangeTodo(event) {
    this.setState({ todo: event.target.value });
  }

  onChangeCategory(event) {
    this.setState({ selectedCategory: event.target.value });
  }

  addTodo() {
    this.setState({
      todos: [...this.state.todos,
      {
        todo: this.state.todo,
        category: this.state.selectedCategory
      }],
      todo: ""
    });
  }

  removeTodo(indexToRemove) {
    this.setState(
      {
        todos: this.state.todos.filter((todo, indexTodo) => indexTodo !== indexToRemove)
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Todo List with Categories - Class Component</h1>
        <section id='action-section'>
          <input type="text" value={this.state.todo} onChange={this.onChangeTodo.bind(this)} placeholder="Add a new todo" />
          <select value={this.state.selectedCategory} onChange={this.onChangeCategory.bind(this)}>
            {
              this.state.categories && this.state.categories.map((category) =>
                (<option key={category.id} value={category.name}>{category.name}</option>))
            }
          </select>
          <button onClick={this.addTodo.bind(this)}>Add</button>
        </section>
        <section id="todo-list-section">
          <ul>
            {
              this.state.todos.map((todo, index) => (
                <li key={index}>{todo.todo} - {todo.category}
                  <button onClick={() => this.removeTodo(index)}>X</button></li>
              ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default TodoListWithCategories;




