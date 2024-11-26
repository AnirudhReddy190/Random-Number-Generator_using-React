// Write your code here

import {Component} from 'react'
import './index.css'


class RandomNumberGenerator extends Component {
 
  state = {number:0}

   randomNumber=()=>{
    const num =Math.ceil(Math.random() * 100)
    this.setState({number:num})
  }

  render() {
    
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the <br />
            range of 0 to 100
          </p>
          <button className="button" onClick={this.randomNumber}>Generate</button>
          <h1 className="heading">{this.state.number}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
