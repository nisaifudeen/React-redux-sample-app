import React from 'react';
import './App.css';
import { connect } from 'react-redux';


class App extends React.Component{
 
  render(){
    console.log(this.props)
    return (
    <div className="row-wrapper">
      {this.props.articles.map((e, i)=> 
        (<div key={i} className="row-field"> <b>{e.id} : </b>{e.title}</div>)
      )}

      {this.props.fan}
    </div>
    )
  }
}


var mapStatetoProps = state => ({
  articles: state.article
});


export default connect(mapStatetoProps)(App);


