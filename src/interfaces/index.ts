export interface IUserCreate {
    name:string
    email:string
    password:string
    age:number
}

export interface IEmail {
    email:string
}

export interface IUser extends IUserCreate{

}

export interface IEnvUser extends Partial<IUser>{
}
export interface IEditUser {
    id:string
    name?:string
    email?:string
    password?:string
    age?:number
    
}