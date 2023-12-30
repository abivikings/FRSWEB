// ** React Imports
import { useState, useEffect, useCallback } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { DataGrid } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import CustomTextField from 'src/@core/components/mui/text-field'
import CardStatsHorizontalWithDetails from 'src/@core/components/card-statistics/card-stats-horizontal-with-details'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Actions Imports
import { fetchData, deleteUser } from 'src/store/apps/user'

// ** Third Party Components
import axios from 'axios'
import apiConfig from 'src/configs/auth'

// ** Custom Table Components Imports
import TableHeader from 'src/views/apps/user/list/TableHeader'
import AddUserDrawer from 'src/views/apps/user/list/AddUserDrawer'

// Import necessary dependencies and components

// Instead of importing Link from 'next/link'
import MuiLink from '@mui/material/Link';


const UserList = ({ apiData }) => {
  // Define columns for the MUI DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 2 },
    { field: 'user', headerName: 'User ID', flex: 1 },
    { field: 'start_date', headerName: 'Start Date', flex: 1},
    { field: 'end_date', headerName: 'End Date', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: 'target_amount', headerName: 'Target Amount', flex: 1 },
    { field: 'collected_amount', headerName: 'Collected Amount', flex: 1 },
    { field: 'campaign.name', headerName: 'Campaign Name', flex: 2,
    renderCell: ({ row }) => (
      <MuiLink href={`/campaigns/${row.id}`} passHref>
        <a>{row.campaign.name}</a>
      </MuiLink>
    ),},
    { field: 'campaign.is_approved', headerName: 'Is Approved', flex: 1,renderCell: ({ row }) => (row.campaign.is_approved ? 'True' : 'False') },
    { field: 'campaign.is_active', headerName: 'Is Active', flex: 1,renderCell: ({ row }) => (row.campaign.is_active ? 'True' : 'False') },
  ];


  // Map the API data to rows for the MUI DataGrid
  const rows = apiData.map(item => ({
    key:item.id,
    id: item.id,
    title: item.title,
    user: item.user,
    start_date: item.start_date,
    end_date: item.end_date,
    description: item.description,
    target_amount: item.target_amount,
    collected_amount: item.collected_amount,
    campaign: {
      name: item.campaign.name,
      is_approved: item.campaign.is_approved,
      is_active: item.campaign.is_active,
    },
  }));

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card>
          <Divider sx={{ m: '0 !important' }} />
          {/* If you have additional components like TableHeader, include them here */}
          <DataGrid
            autoHeight
            rowHeight={62}
            rows={rows}
            columns={columns}
            pageSizeOptions={[10, 25, 50]}
            pagination
          />
        </Card>
      </Grid>
    </Grid>
  );
};

// This is where you fetch data from the API and pass it to the UserList component
const CampaignList = () => {
  const [apiData, setApiData] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(apiConfig.campaignDetails);
        setApiData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDataFromAPI();
  }, []);

  return <UserList apiData={apiData} />;
};

export default CampaignList;

