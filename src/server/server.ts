import * as express from 'express'
import * as bodyParser from 'body-parser'
import {config} from '../common/config'

export class Server {

    public readonly app: express.Application
    public readonly port: number = config.port

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
            console.log(`${config.title} server starting at port ${this.port}`)
        })
    }
}
