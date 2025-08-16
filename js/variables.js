var name = "Hello, World!";

function print() {
    console.log("output: ", name);
   var tesVar = "Test"

     name = "Hello, Wizard!";

     console.log("output2: ", name);

}

console.log('outer output: ', name);

print();

console.log('outer2 output: ', name);

console.log("test", globalThis)