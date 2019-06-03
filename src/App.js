import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      data: null
    }
    this.loadData();
  }

  loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        loading: false,
        data: json
      })
    })
  }

  customRender(){
    if(this.state.loading) {
      return(<p>Loading...</p>)
    }else {
      let getData = this.state.data;

      const output = getData.map(d => {
        return(
        <div key = {d.id}>
          <p> Name: {d.name} | Email: {d.email}</p>
        </div>
        )
      })
      return output
    }
  }
  render() {
    return (
      <div align="center">
        <h3>Fetch API Using React js </h3>
        {this.customRender()}
      </div>
    )
  }
}
