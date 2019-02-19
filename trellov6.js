const myTodos=[
    {
        title:'buy Bread',
        issDone:false,
    },
    {
        title:'buy toy',
        issDone:true,
    },
    {
        title:'buy panner',
        issDone:false,
    },
    {
        title:'buy eggs',
        issDone:true,
    }

]


const chooseTrue=(todos,title) =>
{
    // console.log(todos,title);

    const index=todos.findIndex((anytodo,index)=> {
        console.log(anytodo,index);
        
        if(anytodo.title==="buy panner")
        {
            console.log(anytodo,index);

            return anytodo,index;
        }
    });
    return index;
}


console.log(chooseTrue(myTodos,'buy panner'));
