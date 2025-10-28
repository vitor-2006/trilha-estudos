import { Modulo } from "./schema.js"

export const createModulo = async (idModulo, titulo, dificuldade) => {
    try {
        const newModulo = new Modulo({ idModulo, titulo, dificuldade })
        return await newModulo.save()
    } catch (error) {
        console.error('Erro ao criar Modulo', error.message)
        throw error
    }
}