export interface IAuth {
    token?: string,
    isLogged: boolean,
    HandleLogin: (phone: string, password: string) => Promise<void>
}

export interface Product {
    "_id": string,
    "name": string,
    "price": number,
    "createdBy": string,
    "createdAt": Date,
    "updatedAt": Date
}

export interface ProductDetail {
    "_id": string,
    "name": string,
    "price": number,
    "createdBy": string,
    "createdAt": Date,
    "updatedAt": Date,
    "user" : {
        "name": string
    }
}