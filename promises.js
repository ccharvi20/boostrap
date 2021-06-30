//promises
//http request
fetch("https://jsonplaceholder.typicode.com/users")
.then((result) =>result.json())//response data
.then((data)=>console.log(data)) ///user data
.catch((error)=>console.log(error));//errors
console.log("--------------------------------------------------");

//Async await ->promises ->synthetically improved way
//async function getData() {}  ->normal function
const getData =async()=>{
   try{
    const result=await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    console.log(data);
   } catch(error){
       console.log(error);
   }
};
getData();

