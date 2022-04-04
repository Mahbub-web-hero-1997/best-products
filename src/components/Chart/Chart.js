import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
const Chart = ({ item }) => {
    const { month, investment, sell, revenue } = item;
    return (
        <div>
            <BarChart width={730} height={250} data={item}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="investment" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div >
    );
};

export default Chart;