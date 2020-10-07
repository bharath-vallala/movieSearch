import React,{useEffect} from 'react'
import Show from "../Components/ShowCardComponent/Show"
import {message,getShows} from "../Redux/Actions"
import {connect} from "react-redux"
import "./utils.css"





 class ShowFav extends React.Component {

    componentDidMount(){
    }
    componentDidUpdate(){
       // console.log(this.props.favList)

    }

    
  
     RCards=()=>{
      // console.log(this.props)

        if(this.props.favList){
            let result=this.props.favList
            
                
                    return(result.map((element)=>{
                       // console.log(element.show.image.medium)

                      
                          return  <Show data={element} name={element.show.name} src={element.show.image}
                          premiered={element.show.premiered}
                          language={element.show.language} isfavB={true}></Show>
                         //console.log(element.show.name)
                        })
                    )
                    

            }else{
                return (
                    <div>no favourates added</div>
                )
            }

        
        
        
    }
render(){
    return (
        <div className="flex-container">
            <div className="search-cards">
            {this.RCards()}
            </div>
        </div>
    )
}
}

const mapStateTOProps=(state)=>{
   // console.log(state)
  
    return {favList:state.favList}
  }

export default connect(mapStateTOProps,{message,getShows})(ShowFav);

