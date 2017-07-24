import * as React from 'react'
import './App.css'
import { config } from '../../common/config'
import { backend } from '../app/backend'

type AppState = {serverAlive?: boolean}

export default class App extends React.Component<{}, AppState> {
    constructor(props: AppState) {
        super(props)
        this.state = { }
    }
    componentDidMount() {
        backend.get('/api/isalive')
            .then(o => this.setState({ serverAlive: true }))
            .catch(e => this.setState({ serverAlive: false }))
    }
    render() {
        return (
            <div className="App">
                Tähän tulee {config.title}, varros vaan.
                <div className="server-state">
                    { this.state.serverAlive === undefined ? 'Palvelimen tila ei ole tiedossa' :
                        (this.state.serverAlive) ? 'Palvelin on elossa' : 'Palvelimeen ei saada yhteyttä'
                    }
                </div>
            </div>
        )
    }
}
