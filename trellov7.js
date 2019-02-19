const myTodos=[
    {
        title:'Buy Bread',
        isDone:false,
    },
    {
        title:'Buy Bread',
        isDone:false,
    },
    {
        title:'Buy Tea',
        isDone:true,
    },
    {
        title:'Buy Coffee',
        isDone:false,
    },{
        title:'Buy milk',
        isDone:true,
    }

]

const isTrue=myTodos.filter((todo,index) =>
{

    return todo.isDone===true;
})

console.log(isTrue);
