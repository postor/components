
import { LineChart, Bar, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'

export default ({ width, height, data, margin, xAxis, lines }) => (<LineChart
    width={width}
    height={height}
    data={data}
    margin={margin}>
    <XAxis {...xAxis} />
    <YAxis />
    <Tooltip />
    <Legend />
    {lines.map((x, i) => {
        return (<Line key={i} {...x} />)
    })}
</LineChart>)