import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );
injectTapEventPlugin();

// Now we can render our application into it
render( <App />, document.getElementById('root') );