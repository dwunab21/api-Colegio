import { Controller, Post, Body } from "@nestjs/common";
import { Materias } from "./materias.interface";
import { MateriasService } from "./materias.service";

 

@Controller('materias')
export class MateriasController {
  
  constructor(private readonly servicio: MateriasService) {}
  @Post()
  crear(@Body() body: Materias): Promise<Materias> {
    return this.servicio.crear(body);
  }
}
