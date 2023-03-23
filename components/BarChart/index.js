import{useState, useEffect } from 'react'
import styles from './BarChart.module.css'
import { Bar } from 'react-chartjs-2'

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function Barchart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
            datasets: [
                {
                    label: 'Sales $',
                    data: [12345, 54234, 93021, 12358, 30344, 10294, 50467],
                    borderColor: 'rgb(53, 163, 235)',
                    backgroundColor: 'rgba(53, 163, 235, 0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    })

    return (
        <div className={styles.container}>
            <Bar data={chartData} options={chartOptions} /> 
        </div>
    )
}