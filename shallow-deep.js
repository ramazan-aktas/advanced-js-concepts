// When we assign a variable to another object, it doesn't clone it. Instead, it copies the reference address and shows its value.
// So when a change is held on the new object, it is going to be reflected to the original. This notion is called "shallow copy".

// Simplest way to do is just assigning a new variable. It is generally something unwanted since it may cause unintentional changes and it is kinda unnecessary.

const arr1 = [1, 2, 3, 4]
arr2 = arr1
arr2.push(5)
console.log(arr1, arr2) //[ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]

// On the other hand, if we create a new object and retrieve its content from another object, we seperate them
// !!!BUT inner objects still have the same addresses, so they can still be manipulated simultaneously

const arr3 = [[1], 3, 4]
arr4 = [...arr3]
arr4[0].push(2) // Tricky, huh?
console.log(arr3, arr4) // [ [ 1, 2 ], 3, 4 ] [ [ 1, 2 ], 3, 4 ] (Both affected)
arr4.push(5)
console.log(arr3, arr4) //[ [ 1, 2 ], 3, 4 ] [ [ 1, 2 ], 3, 4, 5 ] (Only arr4 affected)

// concat() also always returns a new array, so if we concat an empty array, but it still assigns by reference. 
arr5 = arr4.concat([]);
console.log(arr5) // [ [ 1, 2 ], 3, 4, 5 ]

// map() creates a new array, too
const arr6 = arr4.map(ele => ele)
arr6.push(6)
console.log(arr6) // [ [ 1, 2 ], 3, 4, 5, 6 ]

// There are several other ways, too, but let's continue with deep copy. Deep copy means that elements are not assigned by their references, but by their values.
// The most practical way is stringfying the object and parsing it back.

const arr7 = JSON.parse(JSON.stringify(arr3));
arr7[0].push(3)
console.log(arr7, arr3) // [ [ 1, 2, 3 ], 3, 4 ] [ [ 1, 2 ], 3, 4 ]