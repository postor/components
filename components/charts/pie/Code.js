import { Form, FormGroup, ControlLabel } from 'react-bootstrap'

export default (props) => {
    const str1 = getUncontrolled(props)
    const str2 = getControlled(props)
    return (<div>
        <p>Notice: install rechart and randomcolor first <strong>yarn add recharts randomcolor</strong></p>
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

function getUncontrolled({ width, height, data, margin, label, pies }) {
    return `import { PieChart, Bar, Tooltip, Pie, Cell, Label } from 'recharts'
    import randomcolor from 'randomcolor'
    const width = ${width}, 
      height = ${height}, 
      data = ${JSON.stringify(data)}, 
      margin = ${JSON.stringify(margin)}, 
      pies = ${JSON.stringify(pies)},
      label = ${JSON.stringify(label)},
      colors = data.map(() => randomcolor())

      const getLabel = ({ index }) => data[index][(label && label.dataKey)]

    export default ({}) => (<PieChart
        width={width}
        height={height}
        margin={margin}>
        <Tooltip />
        {pies.map((x, i) => {
            return (<Pie key={i} {...x} data={data} label={getLabel}>
                {data.map((y, j) => {
                    return (<Cell key={j} fill={colors[j]} />)
                })}
                <Label value={x.dataKey} position="center" />
            </Pie>)
        })}
    </PieChart>)`
}

function getControlled(props) {
    return `import { Component } from 'react'
import { PieChart, Bar, Tooltip, Pie, Cell, Label } from 'recharts'
import randomcolor from 'randomcolor'

class MyChart extends Component {
    constructor(props){
        super(props)
        this.state = ${JSON.stringify(props)}
    }

    render(){
        const { width, height, data, margin, pies, label } = this.state
        const colors = data.map(() => randomcolor())        

        const getLabel = ({ index }) => data[index][(label && label.dataKey)]

        return (<PieChart
            width={width}
            height={height}
            margin={margin}>
            <Tooltip />
            {pies.map((x, i) => {
                return (<Pie key={i} {...x} data={data} label={getLabel}>
                    {data.map((y, j) => {
                        return (<Cell key={j} fill={colors[j]} />)
                    })}                    
                    <Label value={x.dataKey} position="center" />
                </Pie>)
            })}
        </PieChart>)
    }
}

export default MyChart`
}