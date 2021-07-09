import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MateriasController } from './materias.controller';
import { MateriasService } from './materias.service';
import { MateriasSchemas } from './schemas/materias.schema';

@Module({
    imports:[MongooseModule.forFeature([{name:'Materias',schema:MateriasSchemas}])],
    providers: [MateriasService],
    controllers: [MateriasController],

})
    export class MateriasModule {}
