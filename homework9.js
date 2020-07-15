
//1.1
// const promise = new Promise(function (resolve, reject) {
//     setInterval(function () { console.log('Promise is da best'); }, 5000);
// });

//1.2
// let promise = new Promise(async function (resolve, reject) {
//     await setInterval(function () { console.log('Promise is da best'); }, 5000);
// })

//1.3
// let promise = new Promise(function (resolve, reject) {
//     resolve();
// });
// promise.then(
//     function (success) {
//         console.log('Success');
//     },
//     function (error) {
//         console.log('Error')
//     }
// );


//2.
// const fetch = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
// fetch.then(connect =>{
//     console.log('Connected');
//     console.log(connect);
//     const data = connect.json();
//     console.log(data);
// })

//4
// function random(){
// return Math.floor(Math.random() * 11 );
// }
// let x = random;
// if (x < 0) {
// console.log('Failed: the number is smaller than 0');
// } else if (x > 10) {
// console.log("Failed: the number is bigger than 10");
// } else {
// console.log('Passed, bravo');
// }

//5.
// function randomNums(x ,y){
//     return Math.floor(Math.random()* (y-x +1) +x)
// }
// let x = randomNums(4,16);
// if (x < 4) {
//     console.log('Failed: the number is smaller than 4');
//     } else if (x >16) {
//     console.log('Failed: the number is bigger than 16');
//     } else {
//     console.log('Passed, bravo');
//     }

//6. 
// function distance (x1,x2,y1,y2){
//     return Math.floor(Math.sqrt(x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))
// }
// const x = distance(3, 10, 0, 6);
// if (x !== 5) {
// console.log('Failed: the calculation is wrong');
// } else {
// console.log('Passed, bravo');
// }

//7.
const conn = fetch('http://quotes.rest/qod.json') 
const data = conn.json();
console.log(data);
