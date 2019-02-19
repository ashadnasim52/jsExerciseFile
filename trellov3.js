let myTodos=
{
  day:'Monday',
  meetings:0,
  meetdone:0,
  addmetting:function(meet=0){
    this.meetings=this.meetings+meet;
  },
  meetdones:function(meet=0){
    this.meetdone=this.meetdone-meet;
  },
  reset:function () {
    this.meetings=0;
    this.meetdone=0;
  },
  summary:function () {
    return `you have this ${this.meetings} and done are ${this.meetdone} `;
  },
  meetleft:function()
  {
    let metlft=this.meetings+this.meetdone;
    return `You have ${metlft} left`
  }

}
myTodos.addmetting(4);
myTodos.addmetting(4);
myTodos.meetdones(7);
console.log(myTodos.summary());
console.log(myTodos.meetleft());
