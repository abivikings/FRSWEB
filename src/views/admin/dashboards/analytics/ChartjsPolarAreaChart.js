// ** React Imports
import { useState, useEffect, useCallback } from 'react'
// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { PolarArea } from 'react-chartjs-2'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

// ** Third Party Components
import axios from 'axios'
import apiConfig from 'src/configs/auth'

const ChartjsPolarAreaChart = props => {
  // ** Props
  const { info, grey, green, yellow, primary, warning, legendColor } = props

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    layout: {
      padding: {
        top: -5,
        bottom: -45
      }
    },
    scales: {
      r: {
        grid: { display: false },
        ticks: { display: false }
      }
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 25,
          boxWidth: 9,
          color: legendColor,
          usePointStyle: true
        }
      }
    }
  }

  
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(apiConfig.superAdminDashboard);
        setApiData(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchDataFromAPI();
  }, []);

  const data = {
    labels: ['Super Admin', 'Camp Admin', 'Donor', 'Total Camp'],
    datasets: [
      {
        borderWidth: 0,
        label: 'Count',
        data: [
          loading ? 'Loading...' : apiData.super_admin,
          loading ? 'Loading...' : apiData.camp_admin,
          loading ? 'Loading...' : apiData.donor,
          loading ? 'Loading...' : apiData.total_camp,
        ],
        backgroundColor: [primary, yellow, warning, info],
      },
    ],
  };

  

  return (
    <Card>
      <CardHeader
        title='All Users '
        action={
          <OptionsMenu
            iconProps={{ fontSize: 20 }}
            options={['Refresh', 'Edit', 'Share']}
            iconButtonProps={{ size: 'small', className: 'card-more-options', sx: { color: 'text.secondary' } }}
          />
        }
      />
      <CardContent>
        <PolarArea data={data} height={350} options={options} />
      </CardContent>
    </Card>
  )
}

export default ChartjsPolarAreaChart
