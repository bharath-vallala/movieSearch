import {combineReducers} from "redux"

 const messageR=(state=null,action)=>{
    if(action.type==="MESSAGE"){
        return action.payload
    }
    return state 
}

const QueryR=(state=[],action)=>{
    if(action.type==="QUERY_RESULTS"){
        return action.payload
    }
    return state 

}
const SearchR=(state="",action)=>{
    if(action.type==="SEARCH"){
        return action.payload
    }
    return state 
}

const AddFavR=(state=[],action)=>{
    if(action.type==="ADDFAV"){
        console.log(state)
        return action.payload
    }
    return state 
}

export default combineReducers({
    message:messageR,
    queryResult:QueryR,
    searchQuery:SearchR,
    favList:AddFavR
})