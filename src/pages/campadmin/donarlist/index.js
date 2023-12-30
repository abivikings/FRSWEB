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
    { field: 'first_name', headerName: 'First Name', flex: 2 },
    { field: 'last_name', headerName: 'Last Name', flex: 1 },
    { field: 'email', headerName: 'Email Address', flex: 1},
    { field: 'campaign', headerName: 'Campaign', flex: 1 },
    { field: 'added_by', headerName: 'Added By', flex: 1 },
    { field: 'details', headerName: 'Details', flex: 2,
    renderCell: ({ row }) => (
      <MuiLink href={`/campadmin/donarlist/${row.id}`} passHref>
        <a>Details</a>
      </MuiLink>
    ),},
  ];


  // Map the API data to rows for the MUI DataGrid
  const rows = apiData.map(item => ({
    key:item.id,
    id: item.id,
    first_name: item.first_name,
    last_name: item.last_name,
    email: item.email,
    campaign: item.campaign,
    added_by: item.added_by,
    id: item.id,
    // target_amount: item.target_amount,
    // collected_amount: item.collected_amount,
    // campaign: {
    //   name: item.campaign.name,
    //   is_approved: item.campaign.is_approved,
    //   is_active: item.campaign.is_active,
    // },
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
const AllDonarList = () => {
  const [apiData, setApiData] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(apiConfig.addDonar);
        setApiData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDataFromAPI();
  }, []);

  return <UserList apiData={apiData} />;
};

AllDonarList.acl = {
  action: 'read',
  subject: 'alldonarlist-page'
}

export default AllDonarList;

