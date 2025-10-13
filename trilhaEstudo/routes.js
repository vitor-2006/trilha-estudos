import express from 'express'
import { getModulo } from './get.js'
import { createModulo } from './post.js';
import { updateModulo } from "./put.js"
import { deleteModulo } from './delete.js';
import { pesqPorIdModulo, pesqPorDificuldade } from './pesquisa.js'

const routesModulo  = express.Router();

routesModulo.get('/modulo', async (req, res) => {
    const Modulos = await getModulo()
    if(Modulos) {
        return res.status(200).send(Modulos)
    } else {
        return res.status(404).send({ message: 'não têm Modulos registrados' })
    }
});

routesModulo.post('/modulo', async (req, res) => {
    const { idModulo, titulo, dificuldade } = req.body
    const newModulo = await createModulo(idModulo, titulo, dificuldade)
    if(!newModulo) {
        return res.status(400).send("Modulo inválido!")
    }
    return res.status(201).send({ message: 'Modulo criado com sucesso', Modulo: newModulo })
});

routesModulo.put('/modulo/:id', async (req, res) => {
    const { id } = req.params
    const { titulo, dificuldade } = req.body
    const updatedModulo = await updateModulo(id, titulo, dificuldade)
    if(updatedModulo) {
        return res.status(200).send({ message: 'Modulo atualizado com sucesso', Modulo: updatedModulo })
    } else {
        return res.status(404).send({ message: 'Modulo não encontrado ou inválido' })
    }
});

routesModulo.delete('/modulo/:id', async (req, res) => {
    const { id } = req.params
    const deletedModulo = deleteModulo(id)
    if(deletedModulo) {
        return res.status(200).send({ message:'Modulo deletado com sucesso', Modulo: deletedModulo })
    } else {
        return res.status(404).send({ message: 'Modulo não encontrado' })
    }
});

routesModulo.get('/modulo/search', async (req, res) => {
    const { idModulo, dificuldade } = req.query
    let searchModulo 
    if(idModulo) {
       searchModulo = await pesqPorIdModulo(idModulo)
    } else if(dificuldade) {
        searchModulo = await pesqPorDificuldade(dificuldade)
    }
    if(searchModulo) {
        return res.status(200).send(searchModulo)
    } else {
        return res.status(404).send({ message: 'Modulo não encontrado' })
    }
})

export {routesModulo}