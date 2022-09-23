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

(function(){
   console.log("Hello!");
})();