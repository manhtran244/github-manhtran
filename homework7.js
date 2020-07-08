//.1 
// console.log('1-D', '2-A', '3-C', '4-B')

//2.
// setInterval(function() { alert("Hello World") }, 3000);

// 3.1 No

// 3.2 No

// //4. 
// let lit = document.getElementsByTagName('li');
// console.log(lit[2]);
// for (i = 0; i < lit.length; i++) {
//     console.log(lit[i]);
// }
// //5.
// let div = document.getElementsByClassName('singer');
// console.log(div[3]);
// for (i = 0; i < div.length; i++);
// console.log(div[i]);

// //6 


//7.
// let button1 = document.getElementById('button1');
// let button2 = document.getElementById('button2');

// button1.addEventListener('click', (e) => {
//     console.log(e.target);
// });
// button2.addEventListener('click', (e) => {
//     console.log(e.target);
// });

//7.2
// document.getElementById('input').addEventListener('keydown', (e) => {
//     console.log(e.key);
// });

//8.
// function nameWish (){
//     alert('My name is Manh');
//     alert('I wish there would be cure for Corona viruss');
// }
// nameWish();

//9.
// let name = 'Manh';
// let wish = 'get a job';
// function nameWish (name, wish){
//     alert('My name is '+ name +', '+ 'I wish I could ' + wish);
// }
// nameWish(name, wish);

//10.

// function nameWish(name, wish) {
//     if( wish == undefined){
//         alert('My name is: ' + name);
//     }else{
//         alert('My names is: ' + name+ 'I wish I could '  + wish);
//     }
// }
// nameWish('Manh' + ' I wish I could get a job');

//11.
// let upper_btn = document.getElementById("upper_btn");
// console.log(upper_btn);
// upper_btn.addEventListener('click', () => {
//     let input = name_input.value;
//     console.log(input.toUpperCase());
// })