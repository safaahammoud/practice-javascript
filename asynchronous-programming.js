// function fakeAjax(url, cb) {
//     var fake_responses = {
//         "file1": "The first text",
//         "file2": "The middle text",
//         "file3": "The last text",
//     };
//     var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 10;

//     // console.log("Requesting: " + url);

//     setTimeout(function () {
//         cb(fake_responses[url]);
//     }, randomDelay);
// }
// function output(text) {
//     console.log(text);
// }
// function getFile(file) {
//     fakeAjax(file, function (text) {
//         //what do we do here?
//         handleResponse({file:file,content:text});
//     });
// }
// function handleResponse(fileObject){
//     var files = ["file1","file2","file3"];
//     for(const fileName of files){
//         console.log(fileName in fileObject);
//         if(!(fileName in fileObject)){
//             files[fileName] = fileObject[fileName];
//             output(fileName);
//             files.push(files[fileName]);
//         }else{
//             return;
//         }
//     }
// }
// //requests all files in parallel
// getFile("file1");
// getFile("file2");
// getFile("file3");

/**
 * PROMISES FINALLY FUNCTION
 *  */ 
// finally runs regardless of the output of the previous code 
//  asyncFunc().then(function(){

//  }).then(function(){

//  }).finally(function(){

//  });
/**
 * PROMISES if resolve i sucessfull the function continues to then else it stops in reject which takes param error
 *  */ 
// const promise = new Promise((resolve,reject));
/** 
 * Ex 11
 * */ 
// let obj = {
//     myVar: 'foo',

//     myFunc: function(){
//         console.log(this.myVar);
//         setTimeout(function(){
//             console.log(this.myVar);
//         }, 1000);
//     }
// }
// obj.myFunc();
/**Ex 12 */
// function foo(){
//     return {
//         name:'safaa'
//     }
// }
// console.log(foo());
// console.log(foo.prototype);
// function Person(name) {
//     this.name = name;
//     whoAreYou = function() {
//         return `I am ${this.name}`;
//       };
// }
// Person.prototype.whoAreYou = function() {
//     return `I am ${this.name}`;
//   };
//   Person.prototype.name = 'no name';
//   const jane = new Person('jane');
//   console.log(jane.whoAreYou());
//   console.log(jane.constructor.prototype);
// console.log(jane.hasOwnProperty('name'));
// delete jane.name;
// console.log(jane.hasOwnProperty('name'));

//Closures Exercise
//name on the global level
// const name='safaaa';
// function outer(){
//     let outer = 'im outer';
//     function inner(){
        //have access to global variables
        //have access to variables in its own declaration
        //have access to an outer function variables
        // let x = 1;
//         console.log(x);
//         console.log(outer);
//         console.log(name);
//     }
//     return inner();
// }
// outer();

//Exercise 15

// const tap = (value) => 
//     (fn)=>{
//         typeof(fn) === 'function' && fn(value);
//         console.log(value);
//     }
// tap("foo")((it)=>
// console.log('value:',it))
//first console is from the call back second console is from the function we returned in tap