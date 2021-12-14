const initialState = {
    StCart:false,
    qtCart:0,
};

export default (state = initialState, action) => {

    if(action.type === 'SET_STCART') {
        return { ...state, StCart:action.payload.StCart };
    }

    if(action.type === 'SET_QTCART') {
        return { ...state, qtCart:action.payload.qtCart };
    }

    return state;
}