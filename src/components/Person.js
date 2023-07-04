import React from "react";

const Person = ({person, deletePerson}) => {
   
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <h3>{person.job}</h3>
      <h3>{person.gender}</h3>
      <button onClick={()=>{deletePerson(person.id)}} className="delete-btn">Delete</button>
    </div>
  )
}

export default Person;
