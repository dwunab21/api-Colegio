import { ObjectId } from "mongoose";

export interface Alumnos {
    Id?: number;
    Nombre: string;
    Apellido: string;
    Edad: number;
    Grado: string;
    Materia_id:ObjectId

  
    }