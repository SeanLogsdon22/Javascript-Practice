// lets do it

// take string in form "operand int int", then do the operation given the numbers
// 1) parse string. 2) if staments for operation. 3) output

let multiplication = "multiply 50 5"
let quotient = "divide 500 5"
let addition = "add 50 50"
let substraction = "subtract 50 50"
let error = "messin roun"

function stringReader(args) {
    let statement = args.split(" ")

    if (statement[0] == "add") {
        let a = statement[1]
        let b = statement[2]
        let sum = parseInt(a) + parseInt(b)
        return(sum)
    } 

    if (statement[0] == "subtract") {
        let a = statement[1]
        let b = statement[2]
        let difference = parseInt(a) - parseInt(b)
        return(difference)
    } 

    if (statement[0] == "multiply") {
       let a = statement[1]
        let b = statement[2]
        let product = parseInt(a) * parseInt(b)
        return(product)
    } 

    if (statement[0] == "divide") {
        let a = statement[1]
        let b = statement[2]
        let quotient = parseInt(a) / parseInt(b)
        return(quotient)

    } else {
        return 'error, wrong operation sign. Enter add, subtract, multiply, or divide.'
    }

}


let add = stringReader(addition)
console.log(add)

let substract = stringReader(substraction)
console.log(substract)

let multiple = stringReader(multiplication)
console.log(add)

let division = stringReader(quotient)
console.log(division)

let mistake = stringReader(error)
console.log(mistake)

/* console.log(stringReader(substraction))
console.log(stringReader(multiplication))
console.log(stringReader(division)) */