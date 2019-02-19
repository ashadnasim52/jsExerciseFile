let todos = [{
        title: 'buy bread',
        done: false,
    },
    {
        title: 'buy lays',
        done: true,
    },
    {
        title: 'buy milk',
        done: false,
    }
];

let number = todos.findIndex(
    function(todo, index) {

        console.log(todo, index);
        return todo.title == 'buy bread';

    });

console.log(number);