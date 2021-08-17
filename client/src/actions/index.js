import axios from 'axios';

export function getDogs(){
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/dogs");
        return dispatch({
            type: 'GET_DOGS', 
            payload: json.data
    
        }) 
    }; 
};
export function dogDetail(id) {
    return async function(dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/dogs/' + id);
            return dispatch({
                type: 'DOG_DETAIL', 
                payload: json.data
            })
        } catch (error){
            console.log(error);
        }
    }
}

export function getNameDogs (name){ 
    return async function(dispatch) { 
        var json = await axios.get("http://localhost:3001/dogs?name=" + name );
        return dispatch({
            type: 'GET_NAME_DOGS',
            payload: json.data
        });

    };
    
}; 

export function getTemperaments() {
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/temperament/");
        return dispatch({
            type: 'GET_TEMPERAMENTS',
            payload: json.data

        })

    }
};

export function postDogs(payload) {
    return async function (dispatch){
        var json = await axios.post("http://localhost:3001/dogs/",payload); 
        console.log(json);
        return json;

    }
}


export function byOrder(payload) {
    return {
        type: 'ORDER',
        payload
    }
}; 

export function byOrderWeight(payload) {
    return {
        type: 'ORDER_WEIGHT',
        payload
    }
};

