import { ADDFAVOURITE, ADDMOVIE, REMOVEFAVOURITE, SET_SHOW_FAV,ADD_SEARCH_RESULT, ADD_TO_LIST, HANDLE_BLUR, HANDLE_ERROR } from "../actions";

const intial_movies_state={
    list:[],
    favourites:[],
    showfavourites:false
}

export function movies(state=intial_movies_state,action) {
    switch(action.type){
        case ADDMOVIE:
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
                movie => movie.Title !== action.movie.Title
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
        case ADD_TO_LIST:
            return {
                ...state,
                list:[action.movie,...state.list]
            }
        default:
            return state
    }
}

const intial_search_state={
    result:[],
    show:false,
    error:false
}

export function search(state=intial_search_state,action){
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result : action.movies,
                show:true,
                error:false
            }
        case ADD_TO_LIST:
            return {
                ...state,
                show:false,
                error:false
            }
        case HANDLE_BLUR:
            return {
                ...state,
                show:false,
                error:false
            }
        case HANDLE_ERROR:
            return{
                ...state,
                result:action.error,
                show:true,
                error:true
            }
        default:
            return state
    }
}

const intial_root_state={
    movies:intial_movies_state,
    search:intial_search_state
}

export default function rootReducer (state=intial_root_state,action){
    return {
        movies:movies(state.movies,action),
        search:search(state.search,action)
    }
}
