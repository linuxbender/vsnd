import React, {Component} from 'react';
import './App.css';
import Button from './components/Base/Button';
import Header from './components/Base/Header';
import I18 from './components/Base/I18';
import Search from './components/form/Search';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Search/>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <Button/>
                </p>
                <h2>Hello</h2>
                <I18 translate={i => <h4> {i('global.d', '42')} </h4>}/>
                <I18 translate={i => <h4> {i('global.e', ': Hi', ' - ', 'und 21')} </h4>}/>
                <h2>Hello</h2>
            </div>
        );
    }
}

export default App;
