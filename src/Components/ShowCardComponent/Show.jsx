import React,{useEffect} from 'react'
import "./show.styles.css"
import {favourates} from "../../Redux/Actions"
import {connect} from "react-redux"

function Show(props) {
    //console.log(props)

useEffect(()=>{
   // console.log("im updated")
},[props.favList])

    let srcc=null
if(props.data.show.image){
    srcc=Object.values(props.data.show.image)[0]
   // console.log(Object.values(props.data.show.image)[0])   
    //console.log(props.data.show.image)

}
   const imageR=()=>{
        if(srcc){
           return <img src={srcc} alt="image"></img>
        }else{
            return <div>image not available </div>
        }
    }

    const addTofav=()=>{
        let list=[];
        if(props.data && props.favList.length>0 ){
          //  console.log([...props.favList])
            list=[...props.favList]
            
                
                let newarr= list.filter((element)=>{
                    return element.show.id!==props.data.show.id
                 
                 

                })
                newarr.push(props.data)
               // console.log(newarr)
                props.favourates(newarr)

      //  console.log(list)

        }else if(props.data){
          //  console.log("im in 2")

            list.push(props.data)
            props.favourates(list)

        }
    }

    const rmfromfav=()=>{
        let list=[];
        if(props.data && props.favList.length>0 ){
            //console.log([...props.favList])
            list=[...props.favList]
            
                
                let newarr= list.filter((element)=>{
                    return element.show.id!==props.data.show.id
                 
                 

                })
                
               // console.log(newarr)
                props.favourates(newarr)

       // console.log(list)

        }

    }

    const favb=()=>{
        if(props.isfavB){
            return(<div className="fav-button" onClick={rmfromfav}>
            <img src="https://img.icons8.com/fluent-systems-filled/50/000000/like.png"/>
            <p>remove from favourates</p>

        </div>)
        }else{
            return (<div className="fav-button" onClick={addTofav}>
            <img src="https://img.icons8.com/fluent-systems-filled/50/000000/like.png"/>
            <p>add to favourates</p>

        </div>)
        }
    }
    
    return (
        <div>
            <div className="f-card">
            <div className="f-card2">
            <div className="hor-f"><p className="heading">Name :</p> <p>{props.data.show.name}</p></div>
            <div className="hor-f"><p className="heading">language :</p> <p>{props.data.show.language}</p></div>
            <div className="hor-f"><p className="heading">premiered :</p> <p>{props.premiered}</p></div>
            </div>
                <div className="image-container">
                    {imageR()}
                </div>
                {favb()}
            </div>
        </div>
    )
}

const mapStateTOProps=(state)=>{
   // console.log(state)
  
    return {favList:state.favList}
  }


  export default connect(mapStateTOProps,{favourates})(Show)
