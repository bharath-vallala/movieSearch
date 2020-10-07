import {axiosI} from "../axios/axiosConfig"
export const message =(message)=>{
    return {
        type:"MESSAGE",
        payload: message
    }
}

export const getShows=(query)=>{
    return async(dispatch,getState)=>{
        try {
            let res=await axiosI.get(`/search/shows?q=${query}`)
            dispatch({type:"QUERY_RESULTS",payload:res.data});

        } catch (error) {
            console.log(error);
        }

    }
}

export const searchQuery=(search)=>{
    return {
        type:"SEARCH",
        payload: search
    }
}

export const favourates=(listFav)=>{
    return {
        type:"ADDFAV",
        payload: listFav
    }
}