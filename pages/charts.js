
import { Component } from 'react'
import { translate } from 'react-i18next'
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import Layout from '../components/Layout.js'

import chartDic from '../components/charts'

const translateNS = ['index']

class Index extends Component {

  static translateNS = translateNS

  constructor(props) {
    super(props)
    this.state = {
      chartType: Object.keys(chartDic)[0]
    }
  }

  render() {
    const { chartType } = this.state
    const ChartEditor = chartDic[chartType]
    return (<div>
      <Form inline>
        <FormGroup>
          <ControlLabel>Select chart type:</ControlLabel>
          <FormControl componentClass="select" placeholder="select" onChange={(e) => this.setState({ chartType: e.target.value })}>
            {Object.keys(chartDic).map((x, i) => (<option key={i} value={x}>{x}</option>))}
          </FormControl>
        </FormGroup>
      </Form>
      <hr />
      <ChartEditor />
    </div>
    )
  }
}


export default Layout(translate(translateNS)(Index))