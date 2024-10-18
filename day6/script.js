// let ar = [1, 2, 3, 44, 55]

// //multiplying by 2 in given array
// let newar = ar.map((x) => x * 2)
// console.log(newar)

// let newarr = ar.filter((x) => x % 2 == 0) //filtering even elements
// console.log(newarr)

// let newarrr = ar.filter((x) => x % 2 == 0).map(x => x * 3)
// console.log(newarrr)//filtering even elements and then multiplying by 3

const students = [

    { "name": 'Alice', score: 50 },
    { "name": 'bob', score: 60 },
    { "name": 'charlie', score: 70 },
    { "name": 'David', score: 50 }

]
// let total_Score = students.filter(x => x.score > 60)
//     .map(x => x.score * 2)
//     .reduce((acc, curr) => acc + curr, 0);
// console.log(total_Score);

//set timeout

// setTimeout(() =>{
//     console.log("First task completed");
//     setTimeout(() => {
//         console.log("second task completed");

//         setTimeout(() => {
//             console.log("third task completed");
//         }, 3000)
//     }, 2000)
// }, 1000)
// console.log("end");


//promises
const myPromise = new Promise((resolve, reject) => {
    let success = false;
   if (success){
    resolve("data sent successfully");
   }
   else{
    reject("Failed to send data");
   }
});

myPromise.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

// function task(message,delay){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log(message);
//             resolve();

//         },delay);
//     });
// }
// task("first task completed",1000)
// .then(()=>task("second task is completed",2000))
// .then(()=>task("third task is completed",3000))


const newPromise = new Promise((resolve, reject) => {
    let success = false;
    if(success){
        resolve(students);
    }
    else{
        reject("Failed to fetch data");
    }
});

newPromise.then(data => {
    console.log("data received: ",data);
}).catch(err => {
    console.log("error: ",err);
});