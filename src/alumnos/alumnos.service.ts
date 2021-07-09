import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Alumnos } from "./alumnos.interface";

 

@Injectable()
export class AlumnosService {

    
    constructor(@InjectModel('Alumnos') private readonly alumnoModel:Model<Alumnos>){}
    
        async todos():Promise<Alumnos[]> {
        return await this.alumnoModel.find();
        }  
        
        async uno(id:string):Promise<Alumnos> {
        return await this.alumnoModel.findOne({_id:id});
        }
        
        async crear(alumno:Alumnos):Promise<Alumnos>{
        const  nuevo= new this.alumnoModel(alumno); 
        return await nuevo.save();}


        async update(id:string, alumno:Alumnos):Promise<Alumnos> {
        return await this.alumnoModel.findByIdAndUpdate(id,alumno,{new:true});} 

        async delete(id:string):Promise<Alumnos>{
        return await this.alumnoModel.findByIdAndRemove(id);
        }


}
