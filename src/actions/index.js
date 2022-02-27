//actions types
export const ADDMOVIE='ADDMOVIE';
export const ADDFAVOURITE='ADD_FAVOURITE';
export const REMOVEFAVOURITE='REMOVE_FAVOURITE';
export const SET_SHOW_FAV='SET_SHOW_FAVOURITE';
export const SHOWSEARCH='SHOW_SEARCH';
export const ADD_TO_LIST='ADD_TO_LIST';
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';
export const HANDLE_BLUR='HANDLE_BLUR';
export const HANDLE_ERROR='HANDLE_ERROR';

//actions creator
export function addMovies(movies){
    return {
        type:ADDMOVIE,
        movies
    }
}

export function addFavourite(movie){
    return {
        type: ADDFAVOURITE,
        movie
    }
}

export function removeFavourite(movie){
    return{
        type:REMOVEFAVOURITE,
        movie
    }
}

export function setShowFav(val){
    return{
        type:SET_SHOW_FAV,
        val
    }
}

export function setShowSearch (val){
    return{
        type:SHOWSEARCH,
        val
    }
}

export function addToList(movie){
    return {
        type:ADD_TO_LIST,
        movie
    }
}

export function addToMovie (movie){
    const url =`https://www.omdbapi.com/?apikey=c14dee78&i=${movie.imdbID}`
    return function(dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(movie=>{
            dispatch(addToList(movie))
        })
    }
}

export function handleSearchMovie (movie){
    const url=`https://www.omdbapi.com/?apikey=c14dee78&s=${movie}`
    return function (dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(obj=>{
            console.log(obj)
            if(obj.Response==='False'){
                dispatch(handleError([obj.Error]))
                return
            }
            var arr=obj.Search
            if(arr.length>=6)
            arr=obj.Search.slice(0,6)
            console.log("Search",arr)
            dispatch(addSearchResult(arr))
        })
    }
}

export function addSearchResult (movies){
    return {
        type: ADD_SEARCH_RESULT,
        movies
    }
}

export function handleError (error){
    return{
        type:HANDLE_ERROR,
        error
    }
}

export function handleBlurEvent (val){
    return {
        type:HANDLE_BLUR,
        val
    }
}