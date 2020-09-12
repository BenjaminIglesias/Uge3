//JavaScript functions and Callbacks

//1
function add(n1, n2){
   return n1 +n2;
}
var sub = function(n1,n2){
  return n1 - n2;
} 
var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

//2
console.log( add(1,2) )     // What will this print?
console.log( add )          // What will it print and what does add represent?
console.log( add(1,2,3) ) ; // What will it print
console.log( add(1) );	  // What will it print 	
console.log( cb(3,3,add) ); // What will it print
console.log( cb(4,3,sub) ); // What will it print
console.log(cb(3,3,add())); // What will it print (and what was the problem)
console.log(cb(3,"hh",add)); // What will it print
//3
typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
typeof callback === "function" //Will fail if callback is undefined or is not a function

var cb = function(n1,n2, callback){
try{
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    }catch(e){
        if (n1 || n2 !== "number"){
            console.log("n1 or n2 does not equal to a number");
        }else if(typeof callback !== "function"){
            console.log("callback is not a function");
        }
    }
};
//4
function mul(n1,n2){
    return n1*n2; 
}
//5
cb(3,2,function(n1,n2){return n1/n2});

//Callbacks (with map, filter and forEach)

//1
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
var namesLessthan = names.filter((name) => name.length <= 3);
console.log(namesLessthan.forEach(name => console.log(name)));

//2
var uppercased = namesLessthan.map(navn => navn.toUpperCase());
console.log(uppercased);

//3
function arrtoHtml(array){
    return '<ul>'+ array.map(function(element){return '<li>'+element+'</li>';}).join("") + '</ul>';
}
//4
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

let newerthan1999 = cars.filter(car => car.year < 1999); 
console.log(newerthan1999);
let allVolvo = cars.filter(car => car.make === "Volvo");
console.log(allVolvo);
let below5000 = cars.filter(car => car.price < 5000);
console.log(below5000);

//4a
function arrtoSql(array){
    return 'INSERT INTO cars (id,year,make,model,price) VALUES ( '+ array.map(function(car){return car.id+', '+car.year+', '+car.make+', '+ car.model+', '+car.price;}).join(")(") +"),";
}

//Asynchronous Callbacks
//1
var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");
//jeg vil forvente a-d-f-e-b grundet delay
//2

//this and constructor functions 
//1
function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  //Explain this
  },2000);
}
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //Explain this
//2
function Person(name){
  this.name = name;
   var self = this;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+self.name);  //Explain this
  },2000);
}
var p = new Person("Kurt Wonnegut");
console.log("I'm global: "+ name);
//3
function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);}.bind(this),2000);}
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //Explain this
//4
var greeter = function(){
  console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
setTimeout(g1,500);
setTimeout(g2,1000);
//JavaScript Objects
//1
var car = {type:"Volvo", model:"b18", color:"yellow",weight:850};
for(prop in car){
  console.log(prop,car[prop]);
}
delete car.weight;
for(prop in car){
  console.log(prop,car[prop]);
}
//2

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
this.getinfo = function (){
return console.log(this.firstName,this.lastName,this.age);   
};
}
 p = new Person("hey","yo",1);
p.getinfo();