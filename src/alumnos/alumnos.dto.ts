import { ObjectId } from "mongoose";

export class AlumnosDTO {
readonly Nombre: string;
readonly Apellido: string;
readonly Edad: number;
readonly Grado: string;
readonly Materia_Id: ObjectId;
}