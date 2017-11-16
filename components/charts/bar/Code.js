import { Form, FormGroup, ControlLabel } from 'react-bootstrap'

export default (props) => {
    const str1 = getUncontrolled(props)
    const str2 = getControlled(props)
    return (<div>
        <p>Notice: install rechart first <strong>yarn add rechart</strong></p>
        <hr />
        <Form >
            <FormGroup>
                <ControlLabel>code for Uncontrolled Component:</ControlLabel>
                <textarea value={str1} className="form-control" rows="10" />
            </FormGroup>

            <FormGroup>
                <ControlLabel>code for Controlled Component:</ControlLabel>
                <textarea value={str2} className="form-control" rows="10" />
            </FormGroup>
        </Form></div>)

}

function getUncontrolled({ width, height, data, margin, xAxis, bars }) {
    return `import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'
    const width = ${width}, 
      height = ${height}, 
      data = ${JSON.stringify(data)}, 
      margin = ${JSON.stringify(margin)}, 
      xAxis = ${JSON.stringify(xAxis)}, 
      bars = ${JSON.stringify(bars)}


    export default ({}) => (<BarChart
        width={width}
        height={height}
        data={data}
        margin={margin}>
        <XAxis {...xAxis} />
        <YAxis />
        <Tooltip />
        <Legend />
        {bars.map((x, i) => (<Bar key={i} {...x} />))}
    </BarChart>)`
}

function getControlled(props) {
    return `import { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'

class MyChart extends Component {
    constructor(props){
        super(props)
        this.state = ${JSON.stringify(props)}
    }

    render(){
        const { width, height, data, margin, xAxis, bars } = this.state
        return (<BarChart
            width={width}
            height={height}
            data={data}
            margin={margin}>
            <XAxis {...xAxis} />
            <YAxis />
            <Tooltip />
            <Legend />
            {bars.map((x, i) => (<Bar key={i} {...x} />))}
        </BarChart>)
    }
}

export default MyChart`
}