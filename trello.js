'use Strict'
let myTodos={
    day:'Monday',
    meetings:0,
    meetingdone:0,
}

let addmetting=function(todo,meet=0)
{
    todo.meetings=todo.meetings+meet;
}


let meetDone=function(todo,meet=0)
{
    todo.meetingdone=todo.meetingdone+meet;
}

let resetday=function(todo,meet=0)
{
    todo.meetings=0;
    todo.meetingdone=0;
}


// let summary=function(todo){
//     const meetleft=todo.meetDone-todo.meetings;
//     // console.log(`You have ${todo.meetings} meeting left`);
//     console.log(`You have ${meetleft} meeting left`);


//     return `You have ${meetleft} meeting left`;
// }

addmetting(myTodos,5);
// console.log(`You have ${myTodos.meetings} meeting left`);


addmetting(myTodos,3);
// console.log(`You have ${myTodos.meetings} meeting left`);

meetDone(myTodos,2);

let summary=function(todo)
{
    let meetleft=todo.meetings-todo.meetingdone;
    return meetleft;
}
console.log(summary(myTodos));
