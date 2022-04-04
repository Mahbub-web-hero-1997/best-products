import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const item = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401,
            "id": "1"
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500,
            "id": "2"
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010,
            "id": "3"
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405,
            "id": "4"
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900,
            "id": "5"
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000,
            "id": "6"
        }
    ]
    return (
        <div className='chart_Container'>
            <div>
                <h1>Month wise sell</h1>
                <LineChart className='Line_Chart' width={500} height={400} data={item}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey={'sell'} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                </LineChart>
            </div>
            <div>
                <h1>Investment vs revenue</h1>
                <BarChart width={500} height={400} data={item}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>


        </div>
    );
};

export default Dashboard;