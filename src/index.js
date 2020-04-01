import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// i'm import browserRouter and create a constant to render APP wraped in it
// because i need to wrap everything in browserRouter
const app=(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
