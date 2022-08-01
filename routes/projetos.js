const express = require('express');
const router = express.Router();

// Retorna todos os Projetos.
router.get('/', (req, res, next) => {
    res.status(200).send({
        Mensagem: "Usando GET na Rotas Projetos."
    });
});
// Retornando Projeto especifico.
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        Mensagem: 'Retornando Produto especifico.',
        id: id
    });
});

// Cadastra um novo Projeto.
router.post('/', (req, res, next) => {
    const projeto = {
        nome: req.body.nome,
        img: req.body.img
    }
    res.status(201).send({
        Mensagem: 'Usando POST na Rota Projetos.',
        projetoCriado: projeto
    });
});

// Modifica um Projeto existente.
router.patch('/', (req, res, next) => {
    res.status(200).send({
        Mensagem: 'Usando PATCH na Rota Projetos.'
    });
});

// Deleta um Projeto existente.
router.delete('/', (req, res, next) => {
    res.status(200).send({
        Mensagem: 'Usando DELETE na Rota Projetos.'
    });
});

module.exports = router;