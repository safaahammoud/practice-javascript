/**Ex 1 Target :snip 2 is shortcut to snip 1*/
// var variable1=2;
// var variable2;
/**Snippet 1 */
// if(variable1!==null&&variable1!==''&&!variable1){
//     variable2 = variable1;
// }
/**Snippet 2 */
// variable2 = variable1 || 'casa';
// console.log(variable2);

/**Ex 2 Target :snip 2 is shortcut to snip 1*/
// let a,b;
// [a,b]=[10,20];
// console.log(a,b);
// const tasks = [{subject:'sing if i were a boy',description:'At 7 a.m'}];
// const response = {
//     task:[{subject:'call all clients',description:'at 8 am call ur fuckilng clients'}]
// };

// tasks[0] = response.task[0];
 
// console.log(tasks[0]); 
/**Ex 3 Target :snip 2 is shortcut to snip 1*/
/**Snippet 1 */
// let x;
// let y;
// let z=3;
// console.log(x,y,z);
/**Snippet 2 */
// let x,y, z= 3;
// console.log(x,y,z);
/**Ex 4 Target :snip 2 is shortcut to snip 1*/
/**Snippet 1 */
// const fruits = ['mango', 'peach', 'banana'];
// const fruit = {shape: 'heart like',name:'cherry'};
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
/**Snippet 2 */
// for(let fruit of fruits){
//     console.log(fruit);
// }
// for(let prop in fruit){
//     console.log(prop);
// }
/**Ex 5 Target :snip 2 is shortcut to snip 1*/
// const fruits = ['mango', 'peach', 'banana'];
/**Snippet 1 */
// fruits.forEach(element => {
    
// });
/**Snippet 2 */
// const filteredFruits = [];
// function logArray(element,index,array){
//     console.log("a[" + index + "] = " + element);
//     if(index%2==0) filteredFruits.push(element);
// }
// fruits.forEach(logArray );
// console.log(filteredFruits);
/**Ex 6 Target :snip 2 is shortcut to snip 1*/
/**Snippet 1 */
// const x=1, y=1;
// const obj = { x:x, y:y };
/**Snippet 2 */
// const x=3, y=1;
// const obj =  {x,y};
// console.log(obj);
/**Ex 7 Target :snip 2 is shortcut to snip 1*/
/**Snippet 1 */
// window.name="safo";
// console.log(window);
// function sayHelloF(name) {
//    return () => console.log(window.name);
    
// }
// sayHelloF('dany');
// setTimeout(function() {
//   console.log('Loaded')
// }, 2000);

// list.forEach(function(item) {
//   console.log(item);
// });
/**Snippet 1 */
// const sayHello = name => console.log('Hello', window.name);

// setTimeout(() => console.log('Loaded'), 2000);

// list.forEach(item => console.log(item));
// sayHello('safaa');

/**Ex 8 Target :snip 2 is shortcut to snip 1*/
// const person = {profession:'developer'};
// const {profession:job}=person;
// console.log(job);
// console.log(profession);
/**Ex 9 Target :snip 2 is shortcut to snip 1*/
// for(var i =0;i<3;i++){
//     console.log('safaa')
//     setTimeout(() => {
//         console.log(i);
//     }, 4);
// }
/**Ex 10**/
// y flag is new in es6
// const REGEX = /a/y;
// REGEX.lastIndex = 1;
// console.log('bab'.match(REGEX)); 
// console.log(REGEX.lastIndex);
//returns null since flag y works if the string starts with this character, if you want all character matches 
// you put g flag


// const REGEX = /a/gy;
// console.log('aaba'.replace(REGEX, 'x'));
