import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./index.scss"

function Chart({ data, aspect, title }) {
  return (
    <div className="chart">
      <h3 className="title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00D8FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00D8FF" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className='classGrid' />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#Total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart