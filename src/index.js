import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Componentes/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App id = '1'/>, document.getElementById('root'));
registerServiceWorker();
