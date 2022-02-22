const { request,response} = require('express');

const usuariosGet = (req = request, res = response) => {
    const {q, nombre, apikey} = req.query;
    res.json({
        msg: 'get API - controller',
        q,
        nombre,
        apikey
    });
}

const usuaiosPut = (req, res)=>{
    const id = req.params.id;
    res.status(500).json({
        msg: 'put API - controller',
        id
    });
}

const usuariosPost = (req, res)=>{

    const {nombre, edad} = req.body;
    res.status(201).json({
        msg: 'post API - controller',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res)=>{
    res.json({
        msg: 'delete API - controller'
    });
}

const usuariosPatch = (req, res)=>{
    res.json({
        msg: 'patch API - controller'
    });
}


module.exports = {
    usuariosGet,
    usuaiosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}