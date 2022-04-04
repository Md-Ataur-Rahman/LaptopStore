import React from 'react';
import './DashBoard.css';
import '../../style.css';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]


const DashBoard = () => {

  return (
      <div className="dashboard-section">
        <div className="container">
            <div className="inner-dashboard-section">
                <div>
                    <h3>Sell Chart</h3>
                    <LineChart width={400} height={400} data={data}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <XAxis dataKey="month"/>
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
                <div>
                    <h3>Investment and Revenue</h3>
                        <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                        <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
                        </LineChart>
                </div>
                <div>
                    <h3>Investment In Few Month</h3>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div>
      </div>
  )
}

export default DashBoard