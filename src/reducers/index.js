import { ADDTOLIST } from "../actions";

const intial_state={
    list:[],
    favourites:[],
    showfavourites:false
}

export default function movies(state=intial_state,action) {
    if(action.type===ADDTOLIST){
        return {
            ...state,
            list:action.movies
        }
    }
    return state;
}