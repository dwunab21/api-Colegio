import { ApiProperty } from "@nestjs/swagger";


export class Materia {
    @ApiProperty({})
    nombre: string;
    @ApiProperty({})
    nota1:number;
    @ApiProperty({})
    nota2: number;
    @ApiProperty({})
    nota3: number;
}