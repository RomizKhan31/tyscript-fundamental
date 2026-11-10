type Identity = string | number

const printId: Identity = 12312 

// literal union

type Role = "admin" | "user" | "super-admin"
const role: Role = "super-admin"

// object union 

type Admin = {
    id: number,
    name: string
    role: "admin"
}

type Member = {
    id: number,
    name: string
    role: "member"
}

type User = Admin | Member

const user: User = {
    id: 1,
    name: "Romiz Khan",
    role: "admin"
}