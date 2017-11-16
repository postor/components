
import { PieChart, Bar, XAxis, YAxis, Tooltip, Legend, Pie, Cell, Label } from 'recharts'
import randomcolor from 'randomcolor'

export default ({ width, height, data, margin, pies, label }) => {
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