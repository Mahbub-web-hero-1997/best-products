import React from 'react';
import { Line, LineChart } from 'recharts';

const Dashboard = () => {
    return (
        <div>
            <h1>This is Dashboard</h1>
            <LineChart width={400} height={400}>
                <Line stroke="#8884d8"></Line>
            </LineChart>
        </div>
    );
};

export default Dashboard;