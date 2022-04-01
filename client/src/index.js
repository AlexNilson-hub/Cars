import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import "@mui/material";
import "@mui/icons-material";
import "./assets/scss/style.css"
import App from './App';


export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{

    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);


