function outer () {
    let rememberMe = "What to remember?"
    function inner(){
        return rememberMe
    }
    return inner
    
}
/*
*outer() 
*console.log(rememberMe)
*This will throw ReferenceError since we can't access any data within a function
*/

const rememberThis = outer() // But if we do this, since variables are alive in a more persistent manner, now we can access what is inside that outer() function
/*
*console.log(rememberMe)
*This still won't work though, because the data we want is inside rememberThis variable
*/

console.log(rememberThis()) // This will work and can return rememberMe now through inner() since rememberMe falls into inner function's lexical scope