import * as React from 'react'
import './App.css'
import {config} from '../../common/config'

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className="App">
                Tähän tulee {config.title}, varros vaan.
            </div>
        )
    }
}
