import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiHeader, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import {   Alumno } from './alumnos';
import { Alumnos } from './alumnos.interface';
import { AlumnosService } from './alumnos.service';

@Controller('alumnos')
export class AlumnosController {
  constructor(private readonly servicio: AlumnosService) {}

  
  @ApiOperation({ summary: 'Ver Registros' })
  @Get()
  ObtenerTodos(): Promise<Alumnos[]> {
    return this.servicio.todos();
  }

  /////////////////////////////////////////////////////
  @ApiCreatedResponse({
    description: 'Schema de Alumno',
    type: Alumno,
  })
 
 
  @ApiOperation({ summary: 'Registro de Alumno' })
  @ApiHeader({
    name: 'Gadro',
    description: 'Grado',
  }) 
  @ApiHeader({
    name: 'Edad',
    description: 'Edad',
  })
  @ApiHeader({
    name: 'Apellido',
    description: 'Apellido',
  })
  @ApiHeader({
    name: 'Nombre',
    description: 'Nombre',
  }) 
  @Post()
  crear(@Body() body: Alumnos): Promise<Alumnos> {
    return this.servicio.crear(body);
  }

  /////////////////////////////////////////////////////
 
  @Put(':id')
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Id que se va actualizar',
    example: '60e8844ea5ebec29085c0695',
  })
  @ApiOperation({ summary: 'Actualizar con id' })
 
 
 /////////////////////////////////////////////////////
 @ApiParam({name: 'id'})
 actualizar(
    @Param('id') id,
    @Body()
    alumno: Alumnos,
  ): Promise<Alumnos> {
   return this.servicio.update(id, alumno);
  }

  
  /////////////////////////////////////////////////////
  @ApiOperation({ summary: 'Eliminar con id' })
  @ApiParam({name: 'id'})
  @Delete(':id')
  delete(@Param('id') id): Promise<Alumnos> {
    return this.servicio.delete(id);
  }

}
