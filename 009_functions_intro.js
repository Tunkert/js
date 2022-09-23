function sayHello() {
    console.log("Hello!");
}

// need to call the function
// sayHello();

let hello = () => {
    console.log("Hello you!");
}

// call arrow function set to variable
// hello()

// traditional anonymous function
(function(){
   console.log("Hello!");
})();

// arrow function as an anonymous function
(() => {
    console.log("anonymous!");
})();