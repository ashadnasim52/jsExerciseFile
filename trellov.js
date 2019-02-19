let myTodos={

    day:'Monday',
    meetdone:0,
    meetings:0,
    addMeet:function(num=0)
    {
        this.meetings=this.meetings+num;

    },
    meetdones:function(num=0){
        this.meetdone=this.meetdone+num;
    },
    
    summary:function()
    {

        return (this.meetings-this.meetdone);
    }

}


myTodos.addMeet(5);

myTodos.addMeet(3);

myTodos.meetdones(2);

console.log(myTodos.meetdone);
