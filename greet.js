

function getMessage(name, age) {
   return `hello,my name is ${name}and i am ${age}years old.`
}

// Don't change the code below
console.log(getMessage(process.argv[2], process.argv[3]));



module.exports = getMessage;
