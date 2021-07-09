import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';
import { AlumnosController } from "./alumnos.controller";
import { AlumnosService } from "./alumnos.service";
import { AlumnosSchema } from "./schema/alumnos.schema";
 
 
 

@Module({
    imports:[MongooseModule.forFeature([{name:'Alumnos',schema:AlumnosSchema}])],
    providers: [AlumnosService],
    controllers: [AlumnosController],
  })
  export class AlumnosModule {}
  