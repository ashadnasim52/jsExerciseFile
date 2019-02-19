// // // // // // // cel to faranhite

// // // // // // // let fahernite=100;

// // // // // // // let celcius;

// // // // // // // celcius=(fahernite-32)*(5/9);

// // // // // // // console.log(celcius);


// // // // // // // let Grade=2;

// // // // // // // if(Grade==10)
// // // // // // // {
// // // // // // //     console.log('Amazing');
    
// // // // // // // }
// // // // // // //  else if (Grade>=5)
// // // // // // // {
// // // // // // //     console.log(`Good`);
    

// // // // // // // }
// // // // // // // else if (Grade>=3) {
// // // // // // //     console.log(`poor`);
    
// // // // // // // }
// // // // // // // else{
// // // // // // //     console.log(`fail`);
    
// // // // // // // }




// // // // // // let isVerified=false;
// // // // // // let isGuest=true;
// // // // // // let isLoggedin=true;
// // // // // // let hastoken=true;

// // // // // // if (isVerified && isLoggedin && hastoken) {
// // // // // //     console.log(`Grant Access`);
    
// // // // // // }
// // // // // // else if (isGuest || isVerified) {
// // // // // //     console.log('Grant access to free previews');
    
// // // // // // } else {
    
// // // // // // }


// // // // // const superheroes=['iron Man',"caption America","Spider Man","Ant Man"];

// // // // // console.log(superheroes);
// // // // // console.log(superheroes[2]);


// // // // // console.log(`We have ${superheroes.length} superheroes`);


// // // // let name=function(params) {
// // // //     console.log(`Hello ${params}`);
    
    
// // // // }

// // // // name('ahad');


// // // let multiplier=function(num1,num2)
// // // {
// // //     return (num1*num2);
// // // }

// // // console.log(multiplier(4,5));

// // // let days=['Monday','tuesday','thursday','friday','saturday'];


// // // for(let i=days.length-1;i>=0;i--)
// // // {
// // //     console.log(i);
    
// // //     console.log(days[i]);
    
// // // }



// // // for(let i = 0;i<days.length;i++)
// // // {

// // //     console.log("days are "+days[i]);
    
    
// // // }

// // // for (let index = 0; index < array.length; index++) {
// // //     const element = array[index];
    
// // // }




// // // let funname=function (param1) {
    
// // //     console.log(`Param BRo you are ${param1}`);
    
// // // }


// // // // funname('Ashad')


// // // const days=['Sunday','monday','tuesday','wednesday'];

// // // days.forEach(
// // //     funname('ashad')
// // // );


// // let log=function () {
// //     console.log("just anything");
    
// // }


// // let number=[1,2,3,4,5];

// // number.forEach(log);





// // const days=['sunday','monday','tuesday','wednesday','thursday','frtiday'];


// // days.forEach(function (day,index) {
    
// //     console.log(`starts with ${day} --- ${index+1}`);
    
// // })

// // days.unshift("ashad");

// // days.pop();

// // days.push("Saturdays")

// // days.splice(2,3,'badday')



// // days.splice(4,1,'bad day')

// // console.log(days);



// let todos=[];


// todos.push("Buy breads")
// todos.push("Watch tutorails")
// todos.push("Make app")


// todos.forEach(function (param,index) {
//     console.log(`${index+1}. You have to do ${param}`);
    
// })

// // let toods=[];


// // toods.unshift('BUy Breads')
// // toods.unshift('Watch tuts')
// // toods.unshift('make app')
// todos.push()
// // for(let i=0;i<toods.length;i++)
// // {
// //     console.log(`${i+1} . you have to  ${toods[i]}`);
    
// // }





// const ashad function name(params) {
    
// }



// function grade() {
//     console.log('Grade');
    
// }


// grade();


// let grade=function(marks1=0,marks2=0,marks3=0,marks4=0,marks5=0)
// {
//     console.log(marks1.isNaN);
    
//     let percentage ,sum ,grade;

//     sum=marks1+marks2+marks3+marks4+marks5;
//     console.log(`totoal marks is ${sum}`);
    
//     percentage=(sum/5);
//     console.log(`total percentage is ${percentage}`);
    





//     if (percentage>=90) {
//         console.log('A+');

//     }
//     else if(percentage>=70)
//     {            console.log('A');

        
//     }
//     else if(percentage>=50)
//     {
//         console.log('B+');

//     }
//     else if(percentage>=30)
//     {
//         console.log('C');

//     }
//     else{
//         console.log('Fail');

//     }
   
    

// }






// grade('abc','bbc',99,89,78)



let myYoutubeVideos={
    title:'Loops in JavaScript',
    author:'Hitesh Choudary',
    time:15,
    description:'Long Description for You'
}

console.log(`NEW video on ${myYoutubeVideos.title} by ${myYoutubeVideos.author} and its only ${myYoutubeVideos.time} min long`);
