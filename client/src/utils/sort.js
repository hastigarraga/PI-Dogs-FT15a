function sortMayor (a, b) {
    if(a.name > b.name) {
        return 1;
    }
    if(b.name > a.name) {
        return -1;
    }
    return 0;
};

// function sortMenor (a, b) {
//     if(a.name > b.name) {
//         return -1;
//     }
//     if(b.name > a.name) {
//         return 1;
//     }
//     return 0;
// };


module.exports ={
    sortMayor,
    // sortMenor
}

/* 
const dogsOrder = action.payload === 'name' && action.payload === 'Desc' ?
        state.dogs.sort(function (a, b) {
            if(a.name > b.name) {
                return 1;
            }
            if(b.name > a.name) {
                return -1;
            }
            return 0;
        }) :
        state.dogs.sort(function(a, b) {
            if(a.name > b.name) {
                return -1;
            }
            if(b.name > a.name) {
                return 1;
            }
            return 0;

        })
            return {
                ...state,
                firstDogs: action.payload,
                dogs: dogsOrder
            }

            let orderRace = [...race]; 
    orderRace.sort(function(a, b) { 
        if(order === 'Asc'){
            if(a.name > b.name) {
                return 1;
            }
            if(b.name > a.name) {
                return -1;
            }
            return 0;
        } 
        if(order === 'Desc'){

        }
    orderRace.sort(function(a, b) {
        if(a.name > b.name) {
            return -1;
        }
        if(b.name > a.name) {
            return 1;
        }
        return 0;
    });






    const orderDogs = action.payload === 'Asc' ?
                state.dogs.sort(function(a, b) {
                    if(a.name > b.name) {
                        return 1;
                    }
                    if(b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }) :
                state.dogs.sort(function(a, b) {
                    if(a.name > b.name) {
                        return -1;
                    }
                    if(b.name > a.name) {
                        return 1;
                    }
                    return 0;
                });
                return {
                    ...state,
                    dogs: orderDogs
                }






                case 'orderAz': 
                return {
                    ...state, 
                    dogs: action.payload

                }
            case 'orderZa': 
                return {
                    ...state, 
                    dogs: action.payload

                }











                export function orderAz(payload) {
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/dogs/");
        const orderDogsAz = json.data.sort((a,b) =>{
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });
        return dispatch({
            type: 'ORDER',
            payload: orderDogsAz

        })

    }
};
export function orderZa() {
    return async function(dispatch) {
        var json = await axios.get('http://localhost:3001/dogs/')
        const orderDogsZa = json.data.sort((b, a) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });
        return dispatch({
                type: 'ORDER',
                payload: orderDogsZa
        })
    }
}


export function postDogs() {
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/dogs/");
        return dispatch({
            type: 'POST_DOGS',
            payload: json.data

        })

    }
}




*/