import React,{useEffect} from 'react'
import Show from "../Components/ShowCardComponent/Show"
import {message,getShows} from "../Redux/Actions"
import {connect} from "react-redux"
import "./utils.css"


function ShowCards(props) {
    useEffect(()=>{
        
            props.getShows(props.queryR)
            console.log("im effect")

    
    },[props.queryR, props.favList])

  
    const RCards=()=>{
       // console.log(props.result)

        if(props.isfavourates){
            if(props.result){


            }

        }else{
            if(props.result){
        return(props.result.map((element)=>{
            //console.log(element.show.image.medium)
            if(props.favList){
               // console.log(props.favList)
            }
              return  <Show data={element} name={element.show.name} src={element.show.image}
              premiered={element.show.premiered}
              language={element.show.language}></Show>
             //console.log(element.show.name)
            })
        )
        }else{
            return (
                <div>please search shows</div>
            )
        }
        }
        
        
    }

    return (
        <div className="flex-container">
            <div className="search-cards">
            {RCards()}
            </div>
        </div>
    )
}

const mapStateTOProps=(state)=>{
    console.log(state)
  
    return {favList:state.favList,result:state.queryResult,queryR:state.searchQuery}
  }

export default connect(mapStateTOProps,{message,getShows})(ShowCards);

