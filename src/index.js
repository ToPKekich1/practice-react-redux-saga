import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleWare from 'redux-saga';
import { forbiddenWordsMiddleware } from './redux/middleware';
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleWare();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

saga.run(sagaWatcher); //Привязываем вотчер к саге

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    <React.StrictMode>{app}</React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
