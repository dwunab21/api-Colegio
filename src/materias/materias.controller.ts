import { Controller, Post, Body, Param } from "@nestjs/common";
import { ApiCreatedResponse, ApiHeader, ApiTags } from "@nestjs/swagger";
import { ApiOperation } from "@nestjs/swagger/dist/decorators/api-operation.decorator";
import { ApiParam } from "@nestjs/swagger/dist/decorators/api-param.decorator";
import { request } from "express";
import { Schema } from "mongoose";
import { Materia } from "./materia";
import { Materias } from "./materias.interface";
import { MateriasService } from "./materias.service";

 

@Controller('materias')
export class MateriasController {
  
  constructor(private readonly servicio: MateriasService) {}
  @ApiCreatedResponse({
    description: 'Materias',
    type: Materia,
  })
 
 
  @ApiOperation({ summary: 'Registro de Materia' })
  @ApiHeader({
    name: 'Nota 3',
    description: 'Nota 3',
  }) 
  @ApiHeader({
    name: 'Nota 2',
    description: 'Nota 2',
  })
  @ApiHeader({
    name: 'Nota 1',
    description: 'Nota 1',
  })
  @ApiHeader({
    name: 'Nombre',
    description: 'Nombre',
  }) 
  
  
  //////////////////////////////////////////////////
  @Post()
  actualizar(
    @Param('id') id,
    @Body()
    nombre: Materias,
    nota1: Materias,
    nota2: Materias,
    nota3: Materias,

  ): Promise<Materias> {
    return this.servicio.update(id, nombre);
  }

  @ApiOperation({summary: 'Agregar nueva materia'})
  crear(@Body() body: Materias): Promise<Materias> {
    return this.servicio.crear(body);
  }
}


