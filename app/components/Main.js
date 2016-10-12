import React, {Component} from 'react'

class Main extends Component {
  constructor () {
    super()
    // define state here, if necessary
    // this.state = {
      // someState: someValue,
    // }
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Main