import React from 'react'

class Filters extends React.Component {
  
  sendValue=(event)=>{
    const val=event.target.value
    this.props.onChangeType(val);
  }
  
  sendFindPets=(event)=>{
    this.props.onFindPetsClick()
  }
  
  
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.sendValue}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.sendFindPets}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
