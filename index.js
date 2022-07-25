
"use strict";

function Person(name,age,gender,work,friends,){
   this.name=name;
   this.age=age;
   this.gender=gender;
   this.work=work;
   this.friends=friends;

}

Person.prototype.addFriend=function(name,age,gender,work,friends){
   this.friends.push(new Person(name,age,gender,work,friends))
}



let persons=[
new Person("Paul","20","male","IT",[]),
new Person("Anna","22","female","SWE",[]),
new Person("John","30","male","Doctor",[])

]




// Person.prototype.addFriend=function(name,age,gender,work,friends){
//    this.friends.push(new Person(name,age,gender,work,friends))
//    }





persons[1].addFriend("Patrick","14","male","student",[]);

console.log(persons[1].friends[0].name)


console.log(persons[1].friends[0]);

persons[0].friends.push(new Person("Doe","34","male","Manager",[]));

console.log(persons[0].friends[0].name);
console.log(persons);
let doe=persons[0].friends[0];

console.log(doe);

Person.prototype.display=function(){
   // let text="object {\n";
   for(let item in this){
     console.log(`${item}=> ${this[item]}`);
    
   }
}

console.log(persons[1].display());
console.log(persons[0].friends[0].display());



console.log(persons[1].friends[0].display());



// var promise = new Promise(function(resolve, reject) {
//   const x = "geeksforgeeks";
//   const y = "geeksforgeeks"
//   if(x === y) {
//     resolve();
//   } else {
//     reject();
//   }
// });
   
// promise.
//     then(function () {
//         console.log('Success, You are a GEEK');
//     }).
//     catch(function () {
//         console.log('Some error has occurred');
//     });



// let promise=new Promise(function(resolve,reject){
//    let x="promises";
//    let y="promises";
//    if(x===y){resolve();} 
//    else{reject();}
// }); promise.then(function(){console.log("success this is promise");}).catch(function(){console.log("error!!");});




//  const promise=new Promise((resolve,reject)=>{
//    const x="success";
//    const b="success";

//    if(a===b){
//       resolve();
//    }
//    else{
//       reject();
//    }
// }); promise.then(()=>{
//    console.log("fulfilled");
// }).catch(()=>{
//    console.log("something went wrong!!");
// });


// const promise=new Promise(function(resolve,reject){
//    const n=5;
//    const m=5;
//    if(n==m){
//       resolve();
//    }
//    else{
//       reject();
//    }
// });
// promise.resolve(function(){
//    console.log("congs!!!");
// }).catch(function(){
//    console.log("error!!");
// });