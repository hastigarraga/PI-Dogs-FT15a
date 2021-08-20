const initialState = {
    dogs : [],
    allDogs : [],   
    orderDogs : [],
    weightDogs : [], 
    temperament : [],
    detail : [],

};

// eslint-disable-next-line no-unused-vars
function rootReducer(state = initialState, action) { 
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'GET_DOGS': 
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            };

        case 'GET_TEMPERAMENTS': 
        // console.log("reducer", action.payload)
            return {
                ...state,
                temperament: action.payload,

            };
            
        case 'FILTER_DOGS_CREATED':
            // const allDogs = state.allDogs;
            const dogsFiltered = action.payload === 'Created' ? state.allDogs.filter(d => d.createInDb) : state.allDogs.filter(d => !d.createInDb);
            return {
                ...state,
                dogs: action.payload === 'All' ? state.allDogs : dogsFiltered

            };          
        
        case 'DOG_DETAIL':
            return {
                ...state,
                detail: action.payload
            };

        case 'GET_NAME_DOGS': 
            return {
                ...state,
                dogs: action.payload
            };

        case 'POST_DOGS': 
            return {
                ...state,

            }
            
        case 'ORDER':
            // const allDogs = state.allDogs
            const orderDogs = action.payload === 'Asc' ?
            state.dogs.sort(function(a, b) {
                if(a.name > b.name) return 1;
                if(b.name > a.name) return -1;
                return 0;
            }) :
            state.dogs.sort(function(a, b) {
                if(a.name > b.name) return -1;
                if(b.name > a.name) return 1;
                return 0;
            });
            return {
                ...state,
                dogs: orderDogs
            };

            case 'ORDER_WEIGHT':
                // const pesoDog = state.pesoDog
                const weightDogs = action.payload === 'Weight 1' ?
                state.dogs.sort(function(a, b) { 
                    if(typeof action.payload.weight === 'string'){
                        if (a.weight > b.weight) return 1
                        if (a.weight < b.weight) return -1
                        return 0;
                    } else {
                        if (parseInt(a.weight) > parseInt(b.weight)) return 1
                        if (parseInt(a.weight) < parseInt(b.weight)) return -1
                        return 0;
                    }
                }) :
                state.dogs.sort(function(a, b) {
                    if(typeof action.payload.weight === 'string'){
                        if (a.weight > b.weight) return -1
                        if (a.weight < b.weight) return 1
                        return 0;
                    } else {
                        if (parseInt(a.weight) > parseInt(b.weight)) return -1
                        if (parseInt(a.weight) < parseInt(b.weight)) return 1
                        return 0
                    }
                }); 
                return {
                    ...state,
                    dogs: weightDogs
                }
            
                
        default: 
        
            return state;
                
    }

};

export default rootReducer;