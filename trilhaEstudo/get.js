import { Modulo } from "./schema.js"

export const getModulo = async () => {
    try {
        return await Modulo.find()
    } catch (error) {
        console.log('erro ao buscar Modulos', error.message)
        throw error
    }
}