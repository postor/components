import {
  Component
} from 'react'

import ReactDOM from 'react-dom'
import $ from 'jquery'

class MyComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this._btnListener = () => {
      this.audio.play()
    }
    $(this.btn).bind('click', this._btnListener)
  }
  componentWillUnmount() {
    $(this.btn).unbind('click', this._btnListener)
  }

  render() {
    return (<div>
      <button ref={(btn) => this.btn = btn}>play</button>
      <audio ref={(audio) => this.audio = audio} src="http://www.sample-videos.com/audio/mp3/crowd-cheering.mp3" />
    </div>)
  }

}

export default MyComponent