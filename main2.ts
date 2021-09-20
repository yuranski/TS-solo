// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//         "lat": "-37.3159",
//             "lng": "81.1496"
//     }
// },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
// }
// }

export interface IGeo {
    lat: string
    lng: string
}
export interface ICompany {
    name:string
    catchPhrase:string
    bs:string
}
export interface IAdress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: IGeo
}
export interface IUser {
    id: number
    name: string
    username: string
    email: string
    phone: string
    website: string
    address: IAdress
    company: ICompany
}

let user:IUser = {
    id: 2,
    name: 'asd',
    username: 'asd',
    email: 'asd',
    phone: 'asd',
    website: 'asd',
    company: {name:'asd',bs:'asd',catchPhrase:'asd'},
    address: {city:'asd',street:'asd',suite:'asd',zipcode:'asd',
        geo: {lat:'asd',lng:'asd'}}
}