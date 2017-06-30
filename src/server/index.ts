import * as express from 'express'
import * as bodyParser from 'body-parser'

class Server {

    public readonly app: express.Application
    public readonly port: number = 8066

    public static bootstrap(): Server {
        return new Server()
    }

    constructor() {
        this.app = express()
        this.configure()
    }

    configure() {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.get("/isalive", (req, resp) => resp.json({ status: "OK", timestamp: new Date() }))
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log('Server starting')
        })
    }
}

const server = Server.bootstrap()
server.start()
