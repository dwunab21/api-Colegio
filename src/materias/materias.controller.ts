import { Controller, Post, Body } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ApiOperation } from "@nestjs/swagger/dist/decorators/api-operation.decorator";
import { ApiParam } from "@nestjs/swagger/dist/decorators/api-param.decorator";
import { request } from "express";
import { Schema } from "mongoose";
import { Materias } from "./materias.interface";
import { MateriasService } from "./materias.service";

 

@Controller('materias')
export class MateriasController {
  
  constructor(private readonly servicio: MateriasService) {}
  @Post()
  @ApiParam({
    name: 'Nota 3',
    type: Number,
    description: 'Digitar nota de actividad3 ',
    example: '7' 
  })



  @ApiParam({
    name: 'Nota 2',
    type: Number,
    description: 'Digitar nota de actividad 2 ',
    example: '7'
  })

  @ApiParam({
    name: 'Nota 1',
    type: Number,
    description: 'Digitar nota de actividad 1 ',
    example: '7'
  })
 
  @ApiParam({
    name: 'Nombre',
    type: String,
    description: 'Digitar el nombre de la materia ',
    example: 'Sociales',
   
})

  @ApiOperation({summary: 'Agregar nueva materia'})
  crear(@Body() body: Materias): Promise<Materias> {
    return this.servicio.crear(body);
  }
}
function description(description: any, arg1: string, required: any, arg3: boolean, schema: any, $ref: any, arg6: string) {
  throw new Error("Function not implemented.");
}

function $ref(description: any, arg1: string, required: any, arg3: boolean, schema: any, $ref: any, arg6: string) {
  throw new Error("Function not implemented.");
}

