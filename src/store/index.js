import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//Nos va a permitir debuggear la extensión, e implementar las devtolls de redux.

const store= createStore(rootReducer, composeEnhancer(applyMiddleware(thunk))) //Thunk es un middleware para poder trabajr con fx asincronas.
//thunk es un mW que nos va a ayudar con las funciones asincronas

export default store; //lo exporto para que lo pueda usar el Provider.

