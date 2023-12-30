// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
import AnalyticsProject from 'src/views/dashboards/analytics/AnalyticsProject'
import AnalyticsOrderVisits from 'src/views/dashboards/analytics/AnalyticsOrderVisits'
import AnalyticsTotalEarning from 'src/views/dashboards/analytics/AnalyticsTotalEarning'
import AnalyticsSourceVisits from 'src/views/dashboards/analytics/AnalyticsSourceVisits'
import AnalyticsEarningReports from 'src/views/dashboards/analytics/AnalyticsEarningReports'
import AnalyticsSupportTracker from 'src/views/dashboards/analytics/AnalyticsSupportTracker'
import AnalyticsSalesByCountries from 'src/views/dashboards/analytics/AnalyticsSalesByCountries'
import AnalyticsMonthlyCampaignState from 'src/views/dashboards/analytics/AnalyticsMonthlyCampaignState'
import AnalyticsWebsiteAnalyticsSlider from 'src/views/dashboards/analytics/AnalyticsWebsiteAnalyticsSlider'

// ** Custom Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardStatsWithAreaChart from 'src/@core/components/card-statistics/card-stats-with-area-chart'

const DonarDashboardPage = () => {
  return (
    <ApexChartWrapper>
      <KeenSliderWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} lg={6}>
            <AnalyticsWebsiteAnalyticsSlider />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <AnalyticsOrderVisits />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CardStatsWithAreaChart
              stats='97.5k'
              chartColor='success'
              avatarColor='success'
              title='Revenue Generated'
              avatarIcon='tabler:credit-card'
              chartSeries={[{ data: [6, 35, 25, 61, 32, 84, 70] }]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AnalyticsEarningReports />
          </Grid>
          <Grid item xs={12} md={6}>
            <AnalyticsSupportTracker />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsSalesByCountries />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsTotalEarning />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsMonthlyCampaignState />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsSourceVisits />
          </Grid>
          <Grid item xs={12} lg={8}>
            <AnalyticsProject />
          </Grid>
        </Grid>
      </KeenSliderWrapper>
    </ApexChartWrapper>
  )
}

DonarDashboardPage.acl = {
  action: 'read',
  subject: 'donardashboard-page'
}

export default DonarDashboardPage





// // ** React Imports
// import { useContext,useState, useEffect, useCallback } from 'react'

// // ** Context Imports
// import { AbilityContext } from 'src/layouts/components/acl/Can'

// // ** MUI Imports
// import Grid from '@mui/material/Grid'
// import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
// import Typography from '@mui/material/Typography'
// import CardContent from '@mui/material/CardContent'
// import Divider from '@mui/material/Divider';
// import { DataGrid } from '@mui/x-data-grid'

// // Instead of importing Link from 'next/link'
// import MuiLink from '@mui/material/Link';

// // ** Third Party Components
// import axios from 'axios'
// import apiConfig from 'src/configs/auth'

// const DonarDashboardPage = () => {
//   // ** Hooks

//    // Fetch data from the API when the component mounts
//    const [apiData, setApiData] = useState([]);

//    useEffect(() => {
//      const fetchDataFromAPI = async () => {
//        try {
//          const response = await axios.get(apiConfig.campaignDetails);
//          setApiData(response.data);
//        } catch (error) {
//          console.error('Error:', error);
//        }
//      };

//      fetchDataFromAPI();
//    }, []);

//   const ability = useContext(AbilityContext)

//    // Define columns for the MUI DataGrid
//    const columns = [
//     { field: 'id', headerName: 'ID', flex: 1 },
//     { field: 'title', headerName: 'Title', flex: 2 },
//     { field: 'user', headerName: 'User ID', flex: 1 },
//     { field: 'start_date', headerName: 'Start Date', flex: 1},
//     { field: 'end_date', headerName: 'End Date', flex: 1 },
//     { field: 'description', headerName: 'Description', flex: 1 },
//     { field: 'target_amount', headerName: 'Target Amount', flex: 1 },
//     { field: 'collected_amount', headerName: 'Collected Amount', flex: 1 },
//     { field: 'campaign.name', headerName: 'Campaign Name', flex: 2,
//     renderCell: ({ row }) => (
//       <MuiLink href={`/campadmin/campaigns/${row.id}`} passHref>
//         <a>{row.campaign.name}</a>
//       </MuiLink>
//     ),},
//     { field: 'campaign.is_approved', headerName: 'Is Approved', flex: 1,renderCell: ({ row }) => (row.campaign.is_approved ? 'True' : 'False') },
//     { field: 'campaign.is_active', headerName: 'Is Active', flex: 1,renderCell: ({ row }) => (row.campaign.is_active ? 'True' : 'False') },
//   ];


//   // Map the API data to rows for the MUI DataGrid
//   const rows = apiData.map(item => ({
//     key:item.id,
//     id: item.id,
//     title: item.title,
//     user: item.user,
//     start_date: item.start_date,
//     end_date: item.end_date,
//     description: item.description,
//     target_amount: item.target_amount,
//     collected_amount: item.collected_amount,
//     campaign: {
//       name: item.campaign.name,
//       is_approved: item.campaign.is_approved,
//       is_active: item.campaign.is_active,
//     },
//   }));


//   return (
//     <Grid container spacing={6}>
//       <Grid item md={6} xs={12}>
//         <Card>
//           <CardHeader title='Common' />
//           <CardContent>
//             <Typography sx={{ mb: 4 }}>No ability is required to view this card</Typography>
//             <Typography sx={{ color: 'primary.main' }}>This card is visible to 'user' and 'admin' both</Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//       {ability?.can('read', 'analytics') ? (
//         <Grid item md={6} xs={12}>
//           <Card>
//             <CardHeader title='Analytics' />
//             <CardContent>
//               <Typography sx={{ mb: 4 }}>User with 'Analytics' subject's 'Read' ability can view this card</Typography>
//               <Typography sx={{ color: 'error.main' }}>This card is visible to 'admin' only</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ) : null}
//       <Grid item xs={12}>
//         <Card>
//           <Divider sx={{ m: '0 !important' }} />
//           {/* If you have additional components like TableHeader, include them here */}
//           <DataGrid
//             autoHeight
//             rowHeight={62}
//             rows={rows}
//             columns={columns}
//             pageSizeOptions={[10, 25, 50]}
//             pagination
//           />
//         </Card>
//       </Grid>
//     </Grid>

//   )
// }


// DonarDashboardPage.acl = {
//   action: 'read',
//   subject: 'donardashboard-page'
// }

// export default DonarDashboardPage
