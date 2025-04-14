
import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const resultsData = [
    {
      "name": "Rahim",
      "physics": 85,
      "chemistry": 78,
      "math": 92
    },
    {
      "name": "Karim",
      "physics": 74,
      "chemistry": 81,
      "math": 69
    },
    {
      "name": "Sumaiya",
      "physics": 90,
      "chemistry": 88,
      "math": 94
    },
    {
      "name": "Tariq",
      "physics": 68,
      "chemistry": 72,
      "math": 70
    },
    {
      "name": "Nusrat",
      "physics": 95,
      "chemistry": 91,
      "math": 89
    },
    {
      "name": "Fahim",
      "physics": 60,
      "chemistry": 65,
      "math": 58
    },
    {
      "name": "Lamia",
      "physics": 82,
      "chemistry": 79,
      "math": 85
    },
    {
      "name": "Sajid",
      "physics": 77,
      "chemistry": 74,
      "math": 80
    },
    {
      "name": "Maliha",
      "physics": 88,
      "chemistry": 86,
      "math": 91
    }
  ]
  

const Rescharts = () => {
    return (
        <div>
            <LineChart width={800} height={600} data={resultsData}>
            <XAxis dataKey= 'name'></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
            <Line dataKey="math"></Line>
            <Line dataKey="physics" stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default Rescharts;