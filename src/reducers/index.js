import { ADDFAVOURITE, ADDTOLIST, REMOVEFAVOURITE, SET_SHOW_FAV } from "../actions";

const intial_state={
    list:[],
    favourites:[],
    showfavourites:false
}

export default function movies(state=intial_state,action) {
    switch(action.type){
        case ADDTOLIST:
            return {
                ...state,
                list:action.movies
            }
        case ADDFAVOURITE:
            return {
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVEFAVOURITE:
            const filtered=state.favourites.filter(
                movie => movie.title !== action.movie.title
            )
            return{
                ...state,
                favourites : filtered
            }
        case SET_SHOW_FAV:
            return{
                ...state,
                showfavourites:action.val
            }
        default:
            return state
    }
}