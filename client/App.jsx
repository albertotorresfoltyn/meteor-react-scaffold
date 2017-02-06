import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor() {
    super()
  }

  render(){
    return (
      <h1>hola mundo</h1>
    )
  }
}

if (Meteor.isClient){
  Meteor.startup(function(){
    ReactDOM.render(<App/>, document.getElementById("react-viewport"));
  })
}
