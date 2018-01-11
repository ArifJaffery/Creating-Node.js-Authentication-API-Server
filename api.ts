


export class iuser {
    username:string;
    password:string;
}

export const users:iuser[]=[
    {username:'arif',password:'123'},
    {username:'asim',password:'456'},
    {username:'atif',password:'789'}    
];

export interface icrud{
    create:()=>{},
    read:()=>{},
    update:()=>{},
    delete:()=>{}
}