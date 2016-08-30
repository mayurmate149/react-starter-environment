import React from 'react';
import {render} from 'react-dom';
import SimpleComponent from './component.jsx';

require('./../../css/style.css');

class App extends React.Component {
    render () {
        return (
            <div>
            <h2>Hello, Mayur Mate !</h2>
            <SimpleComponent />
        </div>
    );
    }
}

render(<App/>, document.getElementById('app'));