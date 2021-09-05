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

// functions
function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(2, 2))

function log(message: string | number): void {
    console.log(message)
}
log(addNum(2, 5))

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'JoJo'

}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonaInterface {
    id: number
    name: string
    register(): string
}

class Persona implements PersonaInterface {
    public id: number;
    public name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is registered`;
    }
}

const brad = new Persona(1, 'Brad')
console.log(brad.register())

class Employee extends Persona {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Ali', 'developer');
emp.register()

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3])
let stringArray = getArray<string>(['1', '2', '3'])
