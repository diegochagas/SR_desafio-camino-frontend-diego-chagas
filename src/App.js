import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';
import { store } from './store';
import Home from './pages/Home';

const App = () => {
    
    return (
        <Provider store={store}>
            <div className='instructions'>
                <h1>Desafio Frontend Camino</h1>
                <span>Sinta-se à vontade para implementar a UI da maneira que desejar.</span>
            </div>

            <Home />

            <GlobalStyles />
        </Provider>
    )
}

export default App
