import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Alumnos } from "src/alumnos/alumnos.interface";
import { Materias } from "./materias.interface";

 

@Injectable()
export class MateriasService {

  constructor(@InjectModel('Materias') private readonly materiaModel:Model<Materias>) {}


  async crear(materia:Materias):Promise<Materias> {
    const nuevo = new this.materiaModel(materia);
    return await nuevo.save();

  }

  async update(id:string, nombre:Materias):Promise<Materias> {
    return await this.materiaModel.findByIdAndUpdate(id, nombre,{new:true});} 



}
