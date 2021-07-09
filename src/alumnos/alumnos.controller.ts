import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger";
import { Alumnos } from "./alumnos.interface";
import { AlumnosService } from "./alumnos.service";

 

@Controller('alumnos')
export class AlumnosController {

constructor (private readonly servicio: AlumnosService) {}

@Get()
ObtenerTodos(): Promise<Alumnos[]> {
return this.servicio.todos();
} 

@Post()
crear(@Body() body: Alumnos):
Promise<Alumnos> {
return this.servicio.crear(body);
} 

@Put(':id')
@ApiParam({
    name: 'id',
    type: String,
    description: 'Id que se va actualizar',
    example: 'sgvrrehgt4rgeafr4'
})
@ApiOperation({summary: 'actualizar con id'})
@ApiResponse ({
    status: 201,
    description: 'el registro se ha actualizado'
})
actualizar(@Param('id') id,@Body()
alumno:Alumnos):Promise<Alumnos>{
return this.servicio.update(id,alumno);
} 

@Delete(':id')
delete(@Param('id') id):Promise<Alumnos>
{
return this.servicio.delete(id);
}

}
