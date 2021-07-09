import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';
import { AlumnosModule } from "./alumnos/alumnos.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MateriasModule } from "./materias/materias.module";

 

@Module({
  imports: [AlumnosModule,MateriasModule,MongooseModule.forRoot('mongodb+srv://Admin:un@b2021@cluster0.8o9qw.mongodb.net/Colegio')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//imports:[AlumnosModule,MongooseModule.forRoot('mongodb://localhost:27017/Colegio')],
