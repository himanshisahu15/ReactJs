// src/components/ProductBarChart/ProductBarChart.jsx
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import './ProductBarChart.css';



export default function ProductBarChart({ products }) {
  const years = ['2023', '2024', '2025', '2026'];

  
  const chartData = years.map((year) => {
    const launches = products.filter(
      (p) => p.date.getFullYear().toString() === year
    );
    return {
      name: year,
      pv: launches.length,           // Number of product launches (used for bar 1)
      uv: launches.length * 2,       // Dummy value (used for bar 2)
    };
  });

  return (
    <div className='bar-container'>
        <h2>Product Launch Per Year</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip /> 
          <Legend />
          <Bar
            dataKey="pv"
            fill="#8884d8"
            name="Product Launches"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
           barSize={60} 
             radius={[10, 10, 0, 0]} 
          />
          <Bar
            dataKey="uv"
            fill="#82ca9d"
            name="Orders (Dummy)"
             barSize={60} 
               radius={[10, 10, 0, 0]} 
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}