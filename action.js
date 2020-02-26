console.log("Hello World!!")
 /*var name1="ClassRoom 7"
 
 var name2="This is JS Training"+name1

 var name3="The sum of 1 and 2  is $(1+2) "

 console.log(name2);

 let user={
     name:"BLT",
     age:17
     //sayName=Function()
     //{
       //  
     //}
 };

 console.log(user)
*/
 //function Declaration 

 //function add(N1,N2)
 //{
  //   return N1+N2
// }
 //console.log(add(2,3));

 //console.log(add(12,13)); //error           //Function Expression

 //var add=function(N1,N2)               
 // {
 //   return N1+N2;
 //}
 //console.log(add(12,13)); 


//  function getFood()
//  {
//      return "No food"
//  }

//  function getFood(pay)
//  {
//      if(arguments.length===0)
//      return "no food"
//      return "Biryani"
//  }
//  console.log(getFood()) //?
//  console.log(getFood(100));


//A parameter Function can be  a function

// function greet(f)
// {
//     console.log("----------------");
//     f();
//     console.log("----------------");
// }

//  var en=function()
//  {
//      console.log("Hello")
//  }
//  greet(en);
//  greet(function(){console.log("OLA")})


//A function can be stored in variable

// function greet(){
//     console.log("Hello");
// }
// var sayHello=greet;
// sayHello(); 

//Function Principals

// function teach(){
//     console.log('teaching.js');
//     let learn=function(){console.log('learning.js');}
//     //learn();
//     console.log("teaching ends..");
//     return learn;
// }
// let learnFunc=teach()
// learnFunc()
// learnFunc()

// let games=['Marie','contra','prince','FIFA']
// console.log(games[0]);

// games.forEach(function(game){
//     console.log(game)
//     console.log(game)
// });

// for(let game of games)
// {
//     console.log(games[game]);
// }

// const prices=[20,30,40,50,60,90]
//  const newprice=prices.map((price)=>{
//      return price/2;
//  })

//  console.log(newprice);


//  const scores=['10','60','30','40','90','70']

//  const result=scores.reduce((acc,curr)=>{
//      if(curr>50)
//      {
//          acc+=curr;
//      }
//      return acc;
//  },0)

//  console.log(result);


const clickMeBtn=document.querySelector("#clickBtn")
const divBox=document.querySelector(".alert");
const hideBtn=document.querySelector("#hideBtn")

clickMeBtn.addEventListener('click',()=>
{
 divBox.innerText="Good Afternoon";
})

hideBtn.addEventListener('click',()=>{
    divBox.style.display="None";
})