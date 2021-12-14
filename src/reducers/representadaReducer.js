const initialState = {
    listRepresentada:[],
};

export default (state = initialState, action) => {

    if(action.type === 'SET_LISTREPRESENTADA') {
        return { ...state, listRepresentada:action.payload.listRepresentada };
    }

    return state;
}