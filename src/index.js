import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import App from "./App";
import Reducer from "./reducer";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import thunk from "redux-thunk";

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#00bfa5',
    },
    raisedButton: {
        textTransform: 'uppercase',
    },
    radioButton: {
        borderColor: '#c9cccc',
        checkedColor: '#49a1d5',
    },
    textField: {
        fontFamily: 'proxima-nova',
        marginTop: '0px',
    },
    fontFamily: 'proxima-nova, sans-serif'
});

const store = createStore(
    Reducer,
    applyMiddleware(thunk)
);
    ReactDOM.render(
        <MuiThemeProvider muiTheme={muiTheme}>
            <Provider store={store}>
                <App />
            </Provider>
        </MuiThemeProvider>, document.getElementById('root'));

registerServiceWorker();
