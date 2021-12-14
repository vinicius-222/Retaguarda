import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import representadaReducer from './reducers/representadaReducer';
import pedidosReducer from './reducers/pedidosReducer';

export default combineReducers({
    user:userReducer,
    representada:representadaReducer,
    pedidos:pedidosReducer
});