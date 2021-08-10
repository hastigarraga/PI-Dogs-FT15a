const initialState = {
    dogs : []
}

// eslint-disable-next-line no-unused-vars
function rootReducer(state = initialState, action) { 
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'GET_DOGS':
            return {
                ...state,
                dogs: action.payload
            }
                
    }

};

export default rootReducer;