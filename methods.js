let method=
{
  Month:'asahad',
  Year:'2018',
  meeting:0,
  meetdone:0,
  addmetting:function(meet=0){
    this.meeting=this.meeting+meet;
    return this.meeting;
  }
}

console.log(method.addmetting(878));
