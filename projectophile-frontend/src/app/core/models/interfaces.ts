export interface CreateMentor{
    number:string,
    password:string,

}

export interface JWTRequest{
    number: string,
    password: string,
}

export interface JWTResponse{
    jwtToken:string,
    username:string,
}