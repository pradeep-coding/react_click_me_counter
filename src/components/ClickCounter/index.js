import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onClickCounter = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="counter-container">
          <h1 className="main-heading">
            The Button has been clicked <br />{' '}
            <span className="count-number">{count}</span> times.
          </h1>
          <p className="description">Click the button to increase the count!</p>
          <button
            type="button"
            className="button"
            onClick={this.onClickCounter}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
