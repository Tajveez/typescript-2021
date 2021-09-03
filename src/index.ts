// Basic Types
let id: number = 5;
let company: string = 'CanYouFixMySite.com'
let isPublished: boolean = true;
let x: any = 'Hello';
// x = false;

let age: number

let ids: number[] = [1, 2, 3, 4, 5]
let metaData: any[] = [1, 'alphe', true, 'henry', 5.5]

// Tuple
let person: [number, string, boolean] = [23, 'matt', false]

// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Ali'],
    [2, 'Ahmed'],
    [3, 'Asim']
]

// Union
let pid: string | number = 22;
pid = '22'

// Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// Objects
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'Jojo'
}

type Person = {
    id: number,
    isMarried: boolean
    fav: string
}

const person1: Person = {
    id: 2,
    isMarried: false,
    fav: 'js'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number
// customerId = true