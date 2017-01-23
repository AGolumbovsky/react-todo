var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id:1,
                    text: "Date a sexy mama"
                },
                {
                    id: 2,
                    text: "Not date a sexy mama"
                },
                {
                    id: 3,
                    text: "Date a sexy mama again"
                },
                {
                    id: 4,
                    text: "Make life assessments"
                }
            ]
        };
    },
    handleAddTodo: function(text) {
        alert("new todo " + text);
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
               <TodoList todos={todos}/>
               <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;