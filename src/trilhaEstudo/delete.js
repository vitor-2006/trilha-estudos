import { Modulo } from "./schema.js"

export const deleteModulo = async (id) => {
    try {
        return await Modulo.findByIdAndDelete(id)
    } catch (error) {
        console.error('Erro ao deletar Modulo:', error.message)
        throw error
    }
}