import React, { useEffect, useState } from 'react'
import { fetchDailyDate } from '../../Api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css'
const Charts = ({data:{confirmed,recovered,deaths}, country}) => {
    const [dailyData, setdailyData] = useState([]);

    useEffect(() => {
        const fectchApi = async () => {
            setdailyData(await fetchDailyDate());
        }
        fectchApi()
    },[])
    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#e74c3c',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: '#2980b9',
                        fill: true,

                    }]
                }}
            />
        ) : null
    )

    const barChart=(
        confirmed ?
        (
            <Bar
                data={{
                    labels:['Infected','Recovered','Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor:['#3498db','#2ecc71','#c0392b'],
                        data:[confirmed.value,recovered.value,deaths.value]
                    }]

                }}
                options={{
                    legend:{display:false},
                    title:{display:true,text:`Country state is ${country}`}
                }}
            />
        ) : null

    )

    return (
        <div className={styles.conatiner}>
            <h1>Country Picker</h1>
            {country ? barChart : lineChart}
        </div>

    )
}

export default Charts
