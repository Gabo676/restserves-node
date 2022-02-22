const {Router} = require('express');
const { usuariosGet, usuaiosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuaiosPut)

router.post('/', usuariosPost)

router.delete('/', usuariosDelete)

router.patch('/', usuariosPatch)


module.exports = router;