// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    color: 'Light',
    isDark: true,
    boxStyle: {
      border: 'none',
      backgroundColor: 'black',
      position: 'absolute',
      left: '40%',
      top: '30%',
      color: 'white',
      textAlign: 'center',
    },
  }
  onChange = () => {
    this.setState(prevState => ({
      color: prevState.color === 'Light' ? 'Dark' : 'Light',
      isDark: !prevState.isDark,
      boxStyle: {
        ...prevState.boxStyle,
        backgroundColor: prevState.isDark ? 'white' : 'black',
        color: prevState.isDark ? 'black' : 'white',
      },
    }))
  }
  render() {
    const {color, boxStyle} = this.state

    return (
      <div style={boxStyle}>
        <h1>Click to Change Mode</h1>
        <button className="btn" onClick={this.onChange}>
          {`${color} Mode`}
        </button>
      </div>
    )
  }
}
export default LightDarkMode
