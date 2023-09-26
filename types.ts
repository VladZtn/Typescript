const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 17;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello Typescript!';

const numArray: number[] = [1, 2, 3, 4, 5];
const numArray2: Array<number> = [1, 2, 3, 4, 5];

const words: string[] = ['Hello', 'Typescript'];

const contact: [string, number] = ['Vlad', 1234567];

const variable: any = 42;

function sayMyName(name: string): void{
    console.log(name);
}

sayMyName('Vlad')

function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

type Login = string
const login: Login = 'username';
// const login2: Login = 123456;

type ID = string | number 
const id1: ID = 1234;
const id2: ID = '1234';
// const id3: ID = true;


type SomeType = string | null | undefined;