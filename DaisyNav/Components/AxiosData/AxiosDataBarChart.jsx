import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const AxiosDataBarChart = ({marksPromise}) => {
        const marksDataRes = use(marksPromise)
        const marksData = marksDataRes.data;



            // data processing for the chart

            const marksChartData = marksData.map(studentData => {
                const student = {
                    id: studentData.id,
                    name: studentData.name,
                    physics: studentData.marks.physics,
                    chemistry: studentData.marks.chemistry,
                    math: studentData.marks.math
                }

                const avg = (student.physics + student.chemistry + student.math)  / 3;
                student.avg = avg;

                return student;
            })

            

            console.log(marksChartData);


    return (
        <div>
            <BarChart width={800} height={400} data={marksChartData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey='avg ' fill='yellow'></Bar>
                <Bar dataKey='physics' fill='blue'></Bar>
                <Bar dataKey='chemistry' fill='red'></Bar>
                <Bar dataKey='math' fill='green'></Bar>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default AxiosDataBarChart;