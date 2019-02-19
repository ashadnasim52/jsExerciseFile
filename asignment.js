//object defination and assigmnment 
const myTodos=[
    {
        title:'buy milk',
        isDone:false,
    },{
        title:'buy bread',
        isDone:false,
    },
    {
        title:'buy coffee',
        isDone:true,
    },
    {
        title:'buy piza',
        isDone:false,
    },{
        title:'buy eggs',
        isDone:true,
    },{
        title:'buy keyboards',
        isDone:false,
    },{
        title:'buy laptop',
        isDone:false,
    },{
        title:'buy mackbook',
        isDone:false,
    }
];


//A simple variable to hold the all objevcts which is false becuase the defination is in object
//




const issDone=myTodos.filter((todoss,index)=>todoss.isDone===false)
//a function to print title of the element of issDone
const printTitle=issDone.forEach((element,index)=>console.log(element.title));