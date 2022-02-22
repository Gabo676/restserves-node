const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        this.usuariosPath = '/api/usuarios';

        // Middlewares, para añanadir funcionalidad a nuestras peticiones o webservices

        // Rutas de la aplicación
        this.routes();
    }

    middlewares() {
        // Cors
        this.app.use(cors());

        // Body Parser (lectura y parseo de datos)
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));
    }
    
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is listening on port ${this.port}`);
        });
    }

}

module.exports = Server;