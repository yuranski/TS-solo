interface Client<T,X>{
    id: T,
    login: X
}

let client1: Client<number,string> = {id:22,login:'asdasd'}
let client2: Client<number,boolean> = {id:22,login:true}