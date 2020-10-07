import React from 'react'
import "./search.styles.css"
import {searchQuery} from "../../Redux/Actions"
import {connect} from "react-redux"

function search(props) {



    //console.log(props.queryR)
    return (
        <div className="container">
            <div className="flex-r">
                <input type="text" data-testid="inputs" placeholder="Search" onChange={(e)=>{props.searchQuery(e.target.value)}}></input>
                <div className="button"><p>search</p></div>
            </div>
            
        </div>
    )
}
const mapStateTOProps=(state)=>{
    //console.log(state)
  
    return {queryR:state.searchQuery}
  }

export default connect(mapStateTOProps,{searchQuery})(search)
