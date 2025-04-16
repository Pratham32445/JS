// const user1 = {
//     name : "Ashwin"
// }

// const user2 = user1; // Reference copy

// // const user2 = Object.assign({},user1);

// // console.log(user1.name,user2.name);
// user1.name = "Darshan";
// // console.log(user1.name,user2.name);
// // console.log(user1 == user2)

// // Object Methods

// const user = {
//     name : "Ashwin",
//     sayAge : function(){
//        console.log(this.name,user.name);
//     }
// }

// user.sayAge()

// let user = {
//   name: "John",
//   age: 30,
//   sayHello() {
//     console.log(this.name);
//   },
// };

// let user1 = user;

// user = null;

// console.log(user1.sayHello());

// function saySomething() {
//     console.log(this);
// }

// saySomething();

// let user1 = {
//   name: "user1",
//   age: () => {
//     console.log(this);
//   },
// };

// let user2 = {
//     name: "user1",
//     age: function () {
//       console.log(this);
//     },
//   };

// user1.age();
// user2.age();

// let user = {
//   name : "John",
//   age : this.name + "age",
//   sayAge() {
//     console.log(this.age);
//   }
// }

// user.sayAge();

// let admin = user;
// user = null;

// admin.sayHi();

// Arrow function have no this
// let user = {
//   name: "John",
//   age: 20,
//   sayAge: function () {
//     let check = this;
//     let arrow = () => console.log(check == this);
//     arrow();
//   },
// };

// user.sayAge();

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     }
//   };
// }

// let user = makeUser();
// console.log(user.ref().name);

// constrctor function

// function Calculator() {
//   function read() {
//     this.a = +prompt("give the first Value");
//     this.b = +prompt("give the second value");
//   }
//   function sum() {
//     return this.a + this.b;
//   }
//   function mul() {
//     return this.a * this.b;
//   }
// }

// let calculator = new Calculator();
// calculator.read();

// console.log("Sum=" + calculator.sum());
// console.log("Mul=" + calculator.mul());

// function Accumulator(value = 0) {
//   this.value = value;
//   this.read = function () {
//     const addValue = +prompt("give the value");
//     this.value += addValue;
//   }
//   this.getValue = function() {
//     return this.value;
//   }
// }


// let accumulator = new Accumulator();

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// console.log(accumulator.value);



// // let str = new String("Hello");

// // console.log(str.__proto__);

// // function showName(firstName, lastName, ...titles) {
// //   console.
// //   // console.log( firstName + ' ' + lastName ); // Julius Caesar

// //   // // the rest go into titles array
// //   // // i.e. titles = ["Consul", "Imperator"]
// //   // console.log( titles[0] ); // Consul
// //   // console.log( titles[1] ); // Imperator
// //   // console.log( titles.length ); // 2
// // }

// // showName("Julius", "Caesar", "Consul", "Imperator");

// function showName() {
//   console.log( arguments.length );
//   console.log( arguments[0] );
//   console.log( arguments[1] );

//   // it's iterable
//   // for(let arg of arguments) console.log(arg);
// }

// // shows: 2, Julius, Caesar
// showName("Julius", "Caesar");

// // shows: 1, Ilya, undefined (no second argument)
// showName("Ilya");





// function Name() {
//   var a = "Hello"; 
//   var a = "Mello";
//   console.log(a);
// }

// Name();

// console.log(a);

// function sayHi() {
//   // alert("Hi");
//   console.log(this);
// }

// sayHi();






// function Hello() {
//   console.log("Hello Dear");
//   console.log(Name);
// }

// Hello.Name = "Ashwin";

// Hello();


// let multiply = function(x,y) {
//   console.log(x * y);
// }

// let multiplyby2 = multiply.bind(this,2);

// multiplyby2(3);


// function x() {
//   let name =  "Ashwin";
//   function Y() {
//     console.log(name);
//   }
//   return Y;
// }

// const z = x();
// console.log(z());

const users = [
  {firstName : "Ashwin", lastName : "dfdf",age : 21},
  {firstName : "Darshan", lastName : "dfdf",age : 24},
  {firstName : "lali", lastName : "dfdf",age : 25},
  {firstName : "Savita", lastName : "dfdf",age : 30},
  {firstName : "Gajendra ", lastName : "dfdf",age : 40},
]

const ans = users.reduce((acc,curr) => {
  if(curr.age < 30) {
    acc.push(curr.age);
  }
  return acc;
},[])

console.log(ans);