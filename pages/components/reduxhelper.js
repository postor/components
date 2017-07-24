import reduxHelper from 'next.js-redux-helper'
import wrapper from 'next.js-redux-helper/dest/wrapper'


import React from 'react'
import { connect } from 'react-redux'

const reducers = {
  setCount:(state={},action)=>{
    return {
      ...state,
      count: action.count
    }
  }
}

var initialState = {}
if (typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  initialState = window.__REDUX_DEVTOOLS_EXTENSION__()
}


const initStore = reduxHelper(reducers, initialState)
const reduxWrapper = wrapper(initStore)



const B = connect(state=>state)((props)=>(<div>
  count in B: {props.count||0}
</div>))

class A extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    const {dispatch}=this.props
    this.interval = setInterval(()=>{
      const {count=0} = this.props
      dispatch({
        type: 'setCount',
        count: count+1,
      })
    },1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render(){
    const {count=0}=this.props
    return (<div>
      <p>count in A: {count}</p>
      <B />
    </div>)
  }
}

export default reduxWrapper(connect(state=>state)(A))