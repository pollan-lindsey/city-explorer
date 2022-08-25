import axios from 'axios';
import React, { Component } from 'react'

export default class Map extends Component {
constructor(props) {
  super(props)

  this.state = {
     query: '',
  }
}

//get API stuff
handleLocation = async (e) => {
    // e.preventDefault();

    const API = `http://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION}&q=${this.state.query}&formet=json`
    const res = await axios.get(API);
    console.log(res.data);
}

  render() {
    return (
      <>
      <button onClick={this.handleLocation}>Explore!</button>
      </>
    )
  }
}
