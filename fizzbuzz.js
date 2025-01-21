

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...

    console.log('hello world')

    for(let i = 1; i < 101; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        }
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log("Fizz")
        } 
        if (i % 5 === 0 && i % 3 !== 0) {
            console.log("Buzz")
        }
        if (i % 5 !== 0 && i % 3 !== 0) {
        console.log(i)
    }
    }

    
}

// Now we run the main function...
fizzbuzz();


