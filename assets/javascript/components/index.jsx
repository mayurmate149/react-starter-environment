import React from 'react';
import {render} from 'react-dom';
import SimpleComponent from './component.jsx';

require('./../../css/style.css');

class App extends React.Component {
    render () {
        return (
            <div>
            <p> Hello React!</p>
        <SimpleComponent />
        </div>
    );
    }
}

render(<App/>, document.getElementById('app'));