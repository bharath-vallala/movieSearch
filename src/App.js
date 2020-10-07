import React, { useState, useEffect } from 'react';
import './App.css';
import {connect} from "react-redux"
import {message,getShows} from "./Redux/Actions"
import ShowCards from "./pages/ShowCards.jsx"
import Search from "./Components/SearchComponent/search.jsx"
import ShowFav from "./pages/ShowFav.jsx"



function App(props) {
  useEffect(()=>{
    console.log(props.result);

  },[props.favList])

  return (
    <div className="App">
      <Search></Search>
      <div className="flex-rr">
        <div>
        <p className="heading">Searh Results</p>

        <ShowCards isfavourates={false}></ShowCards>
        </div>
      
      <div className="second">
        <p className="heading">favourites</p>
        <ShowFav></ShowFav>
        </div>
      
      </div>
      

    </div>
  );
}

const mapStateTOProps=(state)=>{
  console.log(state)

  return {msg:state.message,result:state.queryResult,favList:state.favList}
}

export default connect(mapStateTOProps,{message,getShows})(App);
