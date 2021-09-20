// function foo(x:string){
//     console.log(x)
//     return 'foobar';
// }

// foo(100)
// foo('100')
// foo(true)
// foo({name:'vas'})

// function foo1(x:number):number{
//     return x + 2;
// }
// let a = foo1(2);
// console.log(a)
//
// function foo2(x:{name: string, age: number, skills: string[], status: boolean}){
// }
//
// foo2({name: 'asd',age: 123, skills:['asd'],status: true})

class User {
    private _name: string
    private _age: number
    private _greeting?:() => {}

    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get age(): number {
        return this._age;
    }
    set age(value: number) {
        this._age = value;
    }
}
// function foo(a: User){
//     return console.log(User)
// }
// let user = new User();
// user.age = 22;
// user.name = 'sss'
// foo(user);

interface IUser {
    name: string
    age: number
    greeting?(a:string) : string
}
function bar(b:IUser){
}

bar({name: 'asd', age: 22})
bar({name: 'asd', age: 22, greeting:(a:'asd'):string => {return 'hello'} })

class X implements IUser{
    age: number;
    name: string;
    ownXProp1: string
    ownXProp2: number[]
}
let x = new X();
let iUser:IUser[] = [
    x,
    {name:'asd',age:22,greeting: (a: string): string => {return 'asd'}}]
bar(new X())

function foobar(user:User){
    // user.greeting();
}
let user1 = new User('asd',22);
foobar(user1)









