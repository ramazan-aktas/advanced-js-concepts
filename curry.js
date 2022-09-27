// Functions can return another functions. They can also be reconstructed into smaller functions...
// Smaller functions that take one parameter each and pass through them. A little history: Alonso Church, who was a prominent figure in lambda calculus and considered as one of the founders of computer science... 
// cam up with the idea in late 20s but he stripped it down to the (untyped) lambda calculus, circa 1936. Lambda calculus formalizes computation and is the basis of functional programming.

// Let's write a function with an arity of 3.
function saluteGitHub(salute, git, hub) {
return salute + git + hub;
}
console.log(saluteGitHub("Salute ", "Git", "hub")) // Salute Github


// With arrow (lambda) functions, we can pass functions as parameters. 
const helloGithub = hello => {
    return git => {
        return hub => {
            return hello+git+hub;
        }
    }
}// This process is called "currying", its name comes from Haskell Brooks Curry, another logician.
helloGithub("Hello ")("Git")("hub") // Hello Github

// This works fine but a bit messy. 

const hiGithub = hi => git => hub => hi+git+hub; 
hiGithub("Hi ")("Git")("hub") // Hi Github

