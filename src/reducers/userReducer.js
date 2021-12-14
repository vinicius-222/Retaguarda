const initialState = {
    nome:'',
    qt:0,
    StCart:false,
    StMenu:false,
    StArrow:false
};

export default (state = initialState, action) => {

    if(action.type === 'SET_NOME') {
        return { ...state, nome:action.payload.nome };
    }
    if(action.type === 'SET_QT') {
        return { ...state, qt:action.payload.qt };
    }
    if(action.type === 'SET_CART') {
        return { ...state, StCart:action.payload.StCart};
    }
    if(action.type === 'SET_MENU') {
        return { ...state, StMenu:action.payload.StMenu};
    }
    if(action.type === 'SET_ARROW') {
        return { ...state, StArrow:action.payload.StArrow};
    }

    return state;
}