
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'

export default ({ width, height, data, margin, xAxis, bars }) => (<BarChart
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