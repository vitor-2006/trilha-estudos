import { Modulo } from "./schema.js"

export const updateModulo = async (id, preco, diaSemana) => {
    try {
        const updatedModulo = await Modulo.findByIdAndUpdate(
            id,
            { titulo, dificuldade },
            { new:true, runValidators:true }
        )
        return updatedModulo
    } catch (error) {
        console.error('Erro ao atualizar Modulo:', error.message)
        throw error
    }
}