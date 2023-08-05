import { IsNotEmpty, IsString } from "class-validator"


export class CreateGenreDTO {
    @IsNotEmpty()
    @IsString()
    slug: string
    
    @IsNotEmpty()
    @IsString()
    title: string
    
    @IsString()
    @IsNotEmpty()
    description: string
}