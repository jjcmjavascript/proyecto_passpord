
class Server {

    constructor (express)
    {
        this.express = express;
        this.server = this.express();
        this.router = this.express.Router();
        this.server.use( express.urlencoded({extended : true }));
        this.server.use( express.json() );
        this.middlewares();
    }

    setRutas(rutas){
        rutas.forEach( (ruta) => this.router[ruta.method](ruta.path,  ruta.func) );
        this.server.use(this.router);
    }

    setUse(val){
        this.server(val);
    }

    middlewares(){
        this.server.use((req, res, next) => {
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          next();
        });
    }

    start(port){
        this.server.listen(port);
    }
}

module.exports = Server;
