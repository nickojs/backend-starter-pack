const bodyParser = require('body-parser');
const CORS = require('./middlewares/CORS');
const errorHandler = require('./middlewares/error-handler');
const database = require('./config/database');

class Server {
  constructor(express) {
    this.express = express;
    this.app = this.express();
  }

  initDatabase() {
    // return database.sync({/*  force: true  */ });
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  }

  setMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(CORS);
  }

  setRoutes() {
    this.app.get('/', (req, res, next) => {
      res.status(200).json({ message: 'root route' })
    })
    this.app.use(errorHandler);
  }

  run() {
    this.app.listen(process.env.SERVER_PORT || 5000);
  }
}

module.exports = Server;
