/*
  ***************
  KEY CONCEPTS COVERED: 
  --BASICS--
  ---> OBJECTS - NON-PRIMITIVE DATA TYPE 
  ---> OBJECT CREATION 
  ---> ACCESSING OBJECT DATA - DOT VS BRACKET NOTATION 

  --ADVANCED--
  ---> 
  ***************

  


*/


/* 
  Q. EXPLAIN WHAT IS OBJECT IN JS ? 
- Objects in js are non-primitive data types which represents a collection of key value 
  pairs i.e. Properties of the object, where keys are Strings or Symbol and value 
  is any data type (including other objects). It is a data structure too like arrray. 
- Objects can also be defined as variables but not with single value rather 
  multiple values.
- Examples of objects are:
  1. Date Object, Maths Object & RegExp 

  2. Arrays 
  3. Functions

  4. Boolean, number & string (when used with new keyword) 
   Primitive types can be coverted 
   to objects (rarely done) when used with new keyword. 
   This is known as autoboxing.    Q. CAN YOU SAY WHAT IS AUTOBOXING IN JS ? 
   e. g. var num = new Number(42); // Creates a Number object

- JavaScript object also inherits the properties of another object, 
  known as its “prototype.” (later in OOPS)

- As we know from OOPs languages that objects are instances of class. But here in js 
  it is bit different from other oops languages. JS uses prototype based inheritence.
  When we create an object in JS, it is based on object.prototype. (refer OOPs.js file)

Q. DO WE HAVE VARIOUS CATEGORIES OF OBJECTS IN JS ? 
- Categories of JavaScript Objects:
1. Native Object: Defined by the ECMAScript specification, such as arrays, functions, 
                  dates, and regular expressions.
2. Host Object: An object defined by the host environment (e.g., a web browser) 
                in which the JavaScript interpreter is embedded. 
                HTMLElement objects in web browsers are 
                examples of host objects which we use for DOM Manipulation.
3. User-Defined Object: Any object created by the execution of JavaScript code.


Q. WHICH ONE YOU SHOULD USE OBJECT OR ARRAY ? AND WHY ? 
   (IMP)
Arrays and Objects both data strcutures are used to essentially group together 
different variables that belongs together. The big difference is that in Objects the 
order does not matter while retrieval but in Arrays the order in which we specify the
element matters while retreival. Hence we should use Arrays for more ordered data and
Objects is best for unstructured data.  
*/


//  Object Creation  Q. EXPALIN VARIOUS WAYS OF OBJECT CREATION.

/* Creating object simply by using literal method i.e. using curly brace and 
defining key-value pairs to initialize object's properties. 
*/ 

const Hotel = {    
hotelName:"StarLight",  
rooms:200,                  
booked:120,    
roomTypes:["Single", "Double", "Triple"],  // Array (refer Array.js) 
checkAvailability: function() {      
    return this.rooms - this.booked
      /* this keyword is used to indicate that it is using the rooms and 
      booked properties of this object, we shall see this later in details*/ 
  }
};
  
/*  Q. WHAT ARE THE DIFFERENT WAYS OF ACCESIING DATA THAT IS PROPERTIES AND METHODS 
       IN AN OBJECT ? WHAT IS THE BEST WAY AND WHY ? 
    Accessing properties or functions using dot notation 
    the dot is known as memeber  operator which has object to its left and 
    properties or functions to its right
    Another method to access data in object is Bracket Notataion */

console.log(Hotel);
console.log(Hotel.hotelName); // dot will retrive data from Hotel Object 
console.log(Hotel.checkAvailability()); 
console.log(Hotel['checkAvailability']());  // bracket notation, key name as a string
console.log(Hotel['roomTypes']);       // note where we keep () in function in bracket way


/*
Q. WHATS THE DIFFERENCE BETWEEN THE USAGE OF DOT AND BRACKET NOTATION ? OR 
   WHEN WE SHOULD CONSIDER TO USE BRACKET NOTATION ?
  (V.IMP)
  The simplest and the easiest way is to use dot notation especially when we know 
  the property that we're going to use very well. But there are many cases where we have to 
  use bracket notations. And the advantage of bracket notation is that we can use an 
  expression which computes to a value and this value severs as key for accessing property.
  This is most helpful when we don'nt know the property yet or property name is not a
  valid js identifer.
*/
let personX = {
  name: "Alice",
  age: 25,
  "favorite color": "blue"  
 };  /* Note that it's not necessary to enclose keys in double quotes unless 
        they contain special characters, spaces, or are not valid JavaScript 
        identifiers. */

console.log(personX["name"]); // normal bracket notation
let prop = "name";   // property name is stored in a variable outside object 
console.log(personX[prop]); // ["prop"] wrong, no need of quotes for variable here 

// evaluates to an expression corresponding to key 
const ehh = {
  "firstName":"ABC",
  "lastName":"XYZ"
}
const nameKey = "Name";  // ignoring first and last here 
console.log(ehh['first' + nameKey]); // evaluates to firstName through concatnation 
console.log(ehh['last' + nameKey]);  // evaluates to lastName through concatnation 

// When property name has spaces or any other special characters
// For example an object conataining CSS styles  
let styles = {
  "background-color": "blue",
  "font-size": "14px"
};
console.log(styles["background-color"]); 

// 2. When property name starting with a number 
let data = {
  "2020": 100,
  "2021": 200
};
console.log(data["2020"]); 

// Property names defined at runtime 
/* suppose we are building an object that based on user input or data 
from API 
*/
let userInput = "favoriteColor"; // let it be a user feild 
let value = "blue";  // user choice 

let userPreferences = {}; // let it empty object 
userPreferences[userInput] = value; // Using bracket notation to set the property
console.log(userPreferences.favoriteColor); // Outputs: blue




 // More Operations on Propertires using Dot and Bracket Notations 
const College = {
  name: "IMIT",
  type: "State Govt."
};  

College.city = "Cuttack"; // Adding new Property using dot notation 
console.log(College); // Vewing newly added property 

const College2 = {
  name: "NIT",
  type: "Central Govt."
};   

College2["City"] = "Rourkela";    // Adding new property  using bracket notation 
console.log(College2["City"]);     // Viewing new property
// Similarly we could create functions in object 

/* Deletion - delete keyword is used like  
                     delete  College.city or 
                     delete  College2["City"] */


// We can have more complex values in objects like here in point2 exaple  
const point = {
  x:1, 
  y:1
};
const point2 = {
x:point.x,
y: point.y + 1
};
/* The x property is assigned the same value as the x property of another 
   object called point, and the y property is assigned a value that is 
   one greater than the y property of the point object. */

/* In ECMAScript 5, reserved words may be used as property names without quoting but
In general, property names that are reserved words must be quoted in ECMAScript 3*/

console.log(point2);                    


// We will also have nested objects like this one below 

const BioData = {
  Name: "Sam",
  Address:{
    state: "Gujarat",
    location: "surat"
  },
  Contact: {
    mobile: 9923456880,
    Email: "sks7@typeof.com"
   }
}; 
console.log(BioData);
console.log(BioData.Address.location);


// Another way for Creating objects is by Constructor Notation
/* The 'new' keyword and the object constructor creates a blank object, 
then we can add properties and methods to the object using dot noation. 

Now what is Constructor, we will see this here only later */ 
const hotel2 = new Object(); 
hotel2.name = "MoonKnight";
hotel2.rooms = 40;
hotel2.booked = 20;
hotel2.name ="BlackKnight";  // This changed the hotel name. 
hotel2.checkAvailability2 = function() {   // note this is an anynmous function 
  return this.rooms - this.booked;
};
console.log(hotel2.checkAvailability2());
console.log(hotel2.name);

          // VS (note the difference in function creation)

const myNewObject = new Object();
myNewObject.info = 'I am a shiny new object';
function myFunc() {  // note that we have not assigned this function to object property 
  console.log(this.info);
  };
  myNewObject.showInfo = myFunc;  // no () here as we are just assigning not calling  
  myNewObject.showInfo();
/*  In the first case, the method is defined directly when assigning it to the object 
    property. In the second case, the method is defined separately as a named function 
    (myFunc) and then assigned to the object's property.
  */

// Anonymous Functions (Also refer Function.js)
const myNewObject2 = new Object();
myNewObject2.info2 = 'I am a shiny new object';
myNewObject2.showInfo2 = function() {
  console.log(this.info2);
  }
myNewObject2.showInfo2();
// not needed to give a name to our function prior to assigning it, this
//       technique is referred to as using an anonymous function.




// Explanation of 'this' keyword  Q. EXPLAIN 'THIS' KEYWORD ? (V.IMP)

const myProfile = {
  myName:"Sudhanshu",
  BirthYear: 1999,
  hasDriversLicense: true,
  calculateAge: function(BirthYear) {
                let currentDate = new Date() // created data object inside the function 
                let CurrentYear = currentDate.getFullYear();
                return CurrentYear - BirthYear
                  }
};
console.log(myProfile.calculateAge(1999));
/* Note that we already have this year in the object and so again passing 
   the year here in function is not ideal, so what if we could use that mentioned 
   year in object directly in function. Well thats possible using 'this'. 
   
   The 'this' keyword in JavaScript is a special identifier that refers to the 
   the object which is being executed. The value of 'this' can vary depending on 
   how a function is called. 

   Like here in When a function is called as a method of an 
   object, this refers to the object that owns the method.

   In an event handler, this refers to the element that received the event.

   Arrow functions do not have their own this context. Instead, they inherit this 
   from the enclosing lexical context. (see Function.js)

   In the global execution context (outside any function), this refers to the 
   global object. In a browser, this is typically window.   
   Q. IN GLOBAL EXCECUTION CONTEXT OUTSIDE ANY FUNCTION THIS REFERS TO WHAT ? 
    */


   // better version using 'this' 
   const myProfile2 = {
    myName:"Sudhanshu",
    BirthYear: 1999,
    hasDriversLicense: true,
    calculateAge: function(BirthYear) {
                  let currentDate = new Date() // created data object inside the function 
                  let CurrentYear = currentDate.getFullYear();
                  return CurrentYear - this.BirthYear 
                    }
  };
  console.log(myProfile2.calculateAge());



// Creating Many Objects Constructor notation (Object Constructor Functions)
// Q. WHAT IS A CONSTRUCTOR OR CONSTRUCTOR FUNCTION IN JS ? (IMP)
/* This works best when we want several objects to reperesent similar things. 
   Here object constructor uses a function as a template for creating objects.
   Sometimes we need to create many objects of the same type.
   To create an object type we use an object constructor function. 
  */ 

function Person(fName, Lname, Age) { // constructor fun begins with a capital letter. 
this.firstName=fName;  // right hand side values should match fun paras 
this.Lastname=Lname;   // we could use any name for property that is on left hand side 
this.Age=Age;
//this.Email=Email; this will not work as Email not defined as parameter 
this.funName = function() {     
  return this.firstName + " " + this.Lastname;
}
}
/* As learnt 'this' Keyword indicates that properties and methods belongs to the object 
that this function creates.  */

const Person1 = new Person("John", "Wick", 45);
Person1.firstName = "Johnathan";  // Changing the property. 
Person1.Nationality = "Canada";   // Adding new property for Person1 only, js flexibility 
Person1.funName2= function() {    // this is too anonymous function 
  console.log("This is Wick, " + this.funName());
};

console.log(Person1);  
console.log(Person1.funName());  
Person1.funName2();

/* Person1 object is created using constructor function, 
similarly we can create many objects like Person2,3,.. 
Here we can say Person1 is a instance of Person constructor. and another thing about adding new 
properties: JS language's features allow for dynamic property addition. The Nationality property 
wasn't part of the constructor's parameter list, but that's not a problem in JavaScript.*/

/* A note about deletation of Properties: We can delete any property using delete keyword but
it is not recommended instead we should make that undefined or null or even using a special 
character. For example Person1.Age=undefined; is better than delete Person1.Age;*/

// Without Parameter 
function Person2() {
this.firstName = "Default";
this.lastName = "Person";
this.age = 25;
this.sayHello = function() {
    console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
  };
}
const person3 = new Person2();
console.log(person3);
person3.sayHello();

 
















































 
 // More about Object Properties  
 
 /* Object's - Together the key-value pair is also known as property of a object. */

 
 
 /* Properties can usually be changed, added, and deleted, but some are read only. 
Property attributes are metadata associated with each property, 
 which control how the property behaves and how it can be manipulated. 
 
 There are three primary property attributes:

 1. Writable Attribute: This attribute specifies whether the value of the property can be
  modified or reassigned. If a property is writable, its value can be changed; 
  if not, it remains immutable.

  2. Enumerable Attribute: The enumerable attribute determines whether the property 
name is visible when iterating over the object's properties using a loop 
(e.g., a for...in loop). If a property is enumerable, it will be included in these iterations;
 if not, it will be skipped.

 3. Configurable Attribute: The configurable attribute specifies whether a property can be 
deleted, and whether its attributes can be altered. If a property is configurable, 
it can be removed from the object, and its attributes can be changed; otherwise, 
it remains fixed.
  */
const person = {};

Object.defineProperty(person, 'name', {
  value: 'John',
  writable: false,    // This property is read-only
  enumerable: true,    // It's visible during iteration
  configurable: false  // It can't be deleted or have its attributes changed
});

console.log(person.name);  // OP3
person.name = 'Doe';   // Attempting to change the value (will fail if writable is false)
delete person.name; // Attempting to delete the property (will fail if configurable is false)
/* New to ECMAScript (Scripting language specification that defines core features and behavior
 of scripting languages, and JS is the implementation of the ES standard) */











 /* Object Attributes- Also known as internal properties or internal slots that are 
associated with every object which defines and controls characteristics of an object 
These attributes are not directly accessible or modifiable through regular JavaScript code 
but are essential for understanding how objects behave and interact with each other. 
There are three primary object attributes:
1. Prototype - The prototype establishes the object's inheritance hierarchy
which refers to another object, known as the object's prototype. */
const parent = { x: 10 };
const child = Object.create(parent);
console.log(child.x); // 10 Inherited from the prototype (parent)  OP4

/*The Object.create() method allows  to create a new object with a specified 
prototype object. This is useful when you want to create objects with a shared 
set of properties and methods.
*/
/* 2. Class - The class attribute is a string that categorizes the type of an object. 
It is used internally by JavaScript engines to classify objects based on their nature. 
For example, built-in objects like arrays, functions, and regular expressions have 
specific class names that help identify their type.
*/
console.log(Object.prototype.toString.call([])); //  OP5
/* Object.prototype.toString is built-in JavaScript method 
      that returns a string representation of an object's type. */

/* 3. Extensible Flag - The extensible flag specifies whether new properties can be added to
 the object. If an object is extensible (the default behavior), we can add new properties 
 to it. If the extensible flag is set to false, we cannot add new properties,
  delete existing ones, or change their attributes.  */
const nonExtensibleObj = Object.preventExtensions({});
nonExtensibleObj.newProperty = 42; // Throws an error only in strict mode.
















