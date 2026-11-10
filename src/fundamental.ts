// optional , default and rest parameters


const concatName = (firstName: string, lastName?: string): string =>{
    if(!lastName){
        return firstName
    }

    return firstName + " " + lastName
}


// console.log(concatName("Romiz"))


// here 'Ariful is a default paramenter 
const concatName2 = (firstName: string, lastName: string = "Ariful"): string =>{
    return firstName + " " + lastName
}

// console.log(concatName2("Md"))



// rest parameters are used to represent an indefinite number of arguments as an array
const sum = (firstNumber: number, ...restNumbers: number[]): number =>{
    let total = firstNumber
    for(const num of restNumbers){
        total += num
    }
    return total
}

console.log(sum(1, 2, 3, 4, 5, 85)) // 15