import { ApiProperty } from "@nestjs/swagger";


export class Alumno {
    @ApiProperty({})
    nombre: string;
    @ApiProperty({})
    apellido:string;
    @ApiProperty({})
    edad: number;
    @ApiProperty({})
    grado: string;
}