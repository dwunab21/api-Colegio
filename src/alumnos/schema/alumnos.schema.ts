import * as mongoose from 'mongoose';



export const AlumnosSchema= new mongoose.Schema({
Nombre: {type: String, require:true},
Apellido: {type: String, require:true},
Edad:{type: Number, require:true},
Grado: {type: String, require:true},
Materias: [{type: mongoose.Types.ObjectId}]
},
{
    versionKey: false, // sin version
    timestamps: true   // fecha de registro y actualizacion automatica
}

);