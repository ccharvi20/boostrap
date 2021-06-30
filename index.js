console.log("hello from my own JS file");
//control statements
const myMarks =20;
const maxMarks =50;
//if else
if(myMarks<maxMarks){
    console.log("I'm genius!");
} else{
    console.log("I think,I failed");
}
//else if
if(myMarks>maxMarks){
    console.log("Impossible");
}else if(myMarks>30){
console.log("passed!");
}else{
    console.log("failed!😢");
}

//switch
switch(myMarks>maxMarks){
    case true:
    console.log("Hey from case 1,it's true");
    break;
    case false:
        console.log("Hey from case2,apparently it's failed");
        break;
   
    default:
        console.log("Nothing is working here");
        break;
}

//operators
//assignment operators
/*var myMarks=20;
myMarks =20+40;
myMarks=myMarks+20+50;*/


//logical operators
//incement and decrement 
/*var a=0;
var b=0;
var c=0;
b=++a;
c=a++;
console.log({a ,b ,c });
*/

//while
//var randomNumber = Math.floor(Math.random()*100)
/*var randomNumber=50;
while(randomNumber<60){
    console.log("I'm the thanos🤢👹😈");
    randomNumber +=10;

}
*/
//do while
var randomNumber=50;
do{ 
    randomNumber +=10;
}while(randomNumber<60);

//functions

/*const items={
    food:1000,
    drinks:2000,
};
var cart =0;
function addCartValue(item){
    return cart+item; //iupdated
}
function addToCart(item){
    cart=addCartValue(item);
}
addToCart(items.food);
console.log("cart value",cart);*/

//arrow function
const items={
    food:1000,
    drinks:2000,
};
//var cart =0;
//function addCartValue(item){
  //  return cart+item; //updated
//}
/*
var addCartValue=(items)=>{
    return cart+items;//updated
};

function addToCart(item){
    cart=addCartValue(item);
}
var addToCart=(items)=>{
    cart=addCartValue(items);
};
addToCart(items.food);
console.log("cart value",cart);
*/

//Arrow function and Normal function

//hoisting
/*
function myFunction(){
    console.log("yo guys!");
}tion();
myFunction();

const myFunction=()=> console.log("YO");
*/

//this
//current executing object
//depending on the environment ->parent object
//Browser ->window
//pc->{}
/*
const OurObject ={
    name: "this keyword",
    getThis:function(){
console.log(this);
    },
};
OurObject.getThis();

//arrow
const OurObject ={
    name: "this keyword",
    getThis:()=>{
console.log(this);//not supported
    },
};
OurObject.getThis();
/*function getThis(){
    console.log(this);
}
getThis();
const arrowGetThis=()=>{
console.log(this);
};
arrowGetThis();
//syntax and appearances
*/
/*
//ES6 array & Object methods
//array
const myArray=[1,2,3,4,5,6];
console.log(myArray);
//add 7 to the end
myArray.push(7);
console.log(myArray)
//remove 7
myArray.pop(7);
console.log(myArray);
//add 0 to the first element
myArray.unshift(0);
console.log(myArray);
//remove zero from the begining
myArray.shift();
console.log(myArray);
//cut the length
myArray.splice(3);
console.log(myArray);

const myArray=[1,2,3,4,5,6];
const forEachArray=myArray.forEach((Element)=>Element+1);
console.log(forEachArray)
console.log("--------------");
const mapArray=myArray.map((Element)=>Element+1); //ES6
console.log(mapArray);

const student= {
name:"ccharvi",
age:2000,
};
console.log(Object.keys(student));

console.log(Object.values(student));

console.log(Object.entries(student));
*/
const student= {
    name:"ccharvi",
    age:2000,

};
Object.freeze(student);
student.name="ccharvireddi";
console.log(student);