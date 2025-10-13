import { Modulo } from "./schema.js";

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export const pesqPorIdModulo = async (IdModulo) => {
    try {
      return await Modulo.find({ idModulo: IdModulo }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Modulo', error.message);
      throw error;
    }
}

export const pesqPorDificuldade = async (Dificuldade) => {
    try {
      const safeDificuldade = escapeRegex(Dificuldade);
      return await Modulo.find({ dificuldade: { $regex: safeDificuldade, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar Modulo', error.message);
      throw error;
    }
}