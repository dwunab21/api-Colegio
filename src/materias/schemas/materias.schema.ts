import * as mongoose from 'mongoose';

export const MateriasSchemas = new mongoose.Schema(
  {
  Nombre: {type: String, require: true},
  Nota1: {type: Number, require: true},
  Nota2: {type: Number, require: true},
  Nota3: {type: Number, require: true}
});
