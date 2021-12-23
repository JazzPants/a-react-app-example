import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//render the parent component "App"
ReactDOM.render(<App />, document.getElementById('root'));

//top of the chain, so don't need to export