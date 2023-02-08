// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />

        <h1 className="speed-heading">Speed is {speed}mph</h1>
        <p className="limit-data">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons">
          <button
            onClick={this.onAccelerate}
            className="accelerate-btn"
            type="button"
          >
            Accelerate
          </button>
          <button onClick={this.onBrake} className="brake-btn" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
