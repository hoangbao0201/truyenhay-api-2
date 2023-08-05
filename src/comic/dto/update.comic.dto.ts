import { ArrayMinSize, ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsString } from "class-validator"


export class UpdateComicDTO {
    
    @IsString()
    slug: string

    @IsString()
    title: string
    
    @IsString()
    thumbnail: string
    
    @IsString()
    authors?: string
    
    @IsString()
    other_names?: string
    
    @IsString()
    description?: string

    @IsArray()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    // @IsInt({ each: true })
    comicGenres: number[]

}