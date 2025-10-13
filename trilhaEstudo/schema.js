import mongoose from "mongoose";

const ModuloSchema = new mongoose.Schema({
    idModulo: {
        type: Number,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    dificuldade: {
        type: String,
        required: true
    }
})
export const Modulo = mongoose.model('modulo', ModuloSchema)