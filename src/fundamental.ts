


// object type, type allias, interface and enum

const person: {
    name: string,
    age: number
} = {
    name: "romiz",
    age: 22
}

console.log(person)

type Person = {
    name: string,
    age: number
}

const user2: Person = {
    name: "Romiz khan",
    age: 22,

}

const user3: Person = {
    name: "Romiz khan",
    age: 32,
}

console.log(user2)
console.log(user3)

// interface 

interface User {
    id: number,
    name: string,
    age: number,
    isStudent: boolean
}
interface User {
    address?: string
    dateOfBirth: string
}

const user4: User = {
    id: 1,
    name: "Romiz khan",
    age: 22,
    isStudent: true,
    dateOfBirth: "1999-01-01"
}

console.log(user4)