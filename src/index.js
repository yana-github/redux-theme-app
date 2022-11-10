import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import ThemeApp from './ThemeApp';

import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store} >
    <ThemeApp />
    </Provider >
);