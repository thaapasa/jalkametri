import * as request from 'superagent'
import * as Promise from 'bluebird'
import {Response} from 'superagent'
import {contains} from '../../common/strings'

export const backend = {

    get(path: string): Promise<object> {
        const req = request.get(path)
        return Promise.promisify(req.end, { context: req })()
            .then(this.mapResponse)
    },

    mapResponse(r: Response): object {
        if (r.status === 200 && !r.noContent && contains(r.header['content-type'], 'application/json')) {
            return r.body
        } else {
            throw new Error(`Invalid response: ${r.status}, ${r.noContent}, ${r.header['content-type']}`)
        }
    }

}
