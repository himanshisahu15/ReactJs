import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import {  Typography } from 'antd';
import './ProductPieChart.css';

const { Title } = Typography;


const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042',
  '#AF19FF', '#FF4560', '#26A69A', '#EF6C00',
  '#AB47BC', '#5C6BC0', '#009688', '#F50057'
];


const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr',
  'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec'
];

export default function ProductPieChart({ products }) {
 
  const monthCounts = Array(12).fill(0);

  products.forEach((product) => {
    const month = product.date.getMonth(); // 0-11
    monthCounts[month]++;
  });

  const pieData = monthCounts.map((count, index) => ({
    name: MONTHS[index],
    value: count,
  })).filter(item => item.value > 0); // Remove months with 0 launches

  return (
   <div className="bar-chart-container">
      <Title level={3} className="pie-chart-title">Product Launch by Month</Title>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={200}
            fill="#8884d8"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
