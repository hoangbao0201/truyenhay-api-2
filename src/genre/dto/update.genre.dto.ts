import { IsNotEmpty, IsString } from "class-validator"


export class UpdateGenreDTO {
    @IsString()
    slug: string
    
    @IsString()
    title: string
    
    @IsString()
    description: string
}