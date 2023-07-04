import React, { Component } from "react";
import PersonsList from "./components/PersonsList";
import NewPerson from "./components/NewPerson";
import "./App.css";

class App extends Component {

  state = {
    name : " danilo ",
    data : [
      { name: "danilo", job: "developer", gender: "male", id:1 },
      { name: "Ivan", job: "gamer", gender: "male", id:2 },
      { name: "sofija", job: "babysiter", gender: "famale", id:3 },
    ]
  }

  insertNewPerson = (person) => {
    person.id = Math.floor(Math.random())
    let dataCopy = [...this.state.data,person] 
    this.setState({
      data : dataCopy
    })
  } 

  deletePerson = (id) => {
    let filterData = this.state.data.filter(el=>{
      return el.id !== id;
    } );

  this.setState({
    data : filterData
  })
  }
 

    render() {
      return (
        <div>
          <PersonsList deletePerson={this.deletePerson} data={this.state.data}/>
          <NewPerson insertNewPerson={this.insertNewPerson}/>
        </div>
      );
    }
  }

  export default App;