// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
import { addUser } from 'src/store/apps/user'

import axios from 'axios' // Import Axios

import apiConfig from 'src/configs/auth'


const showErrors = (field, valueLen, min) => {
  if (valueLen === 0) {
    return `${field} field is required`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`
  } else {
    return ''
  }
}

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

const schema = yup.object().shape({
  camp_admin_name: yup.string().required(),
  camp_admin_email: yup.string().email().required(),
  contact: yup
    .number()
    .typeError('Contact Number field is required')
    .min(10, obj => showErrors('Contact Number', obj.value.length, obj.min))
    .required(),
    name: yup
    .string()
    .min(3, obj => showErrors('Camp Name', obj.value.length, obj.min))
    .required(),
  username: yup
    .string()
    .min(3, obj => showErrors('Username', obj.value.length, obj.min))
    .required()
})

const defaultValues = {
  camp_admin_email: '',
  camp_admin_name: '',
  country: '',
  billing: '',
  name: '',
  username: '',
  contact: Number('')
}

const SidebarAddUser = props => {
  // ** Props
  const { open, toggle } = props

  // ** State
  const [plan, setPlan] = useState('basic')
  const [role, setRole] = useState('subscriber')

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.user)

  const {
    reset,
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const handleSubmitCampReg = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const storedToken = window.localStorage.getItem('accessToken');
    try {
      const response = await axios.post(
        apiConfig.addDonar,
        formData,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle successful response
      console.log('Response:', response.data);

      // Show success message (you can replace this with your own notification logic)
      alert('Donar User added successfully');

      // Clear form fields
      reset();

      // Close the sidebar
      handleClose();
    } catch (error) {
      // Handle error
      console.error('Error:', error);
      // You might want to show an error message here
    }
  };
  
  // const handleSubmitCampReg = async e => {
  //   e.preventDefault()
  //   const formData = new FormData(e.target)
  //   const storedToken = window.localStorage.getItem('accessToken');
  //   try {
  //     const response = await axios.post(apiConfig.addDonar,
  //       formData, {
  //         headers: {
  //           Authorization: `Bearer ${storedToken}`,
  //           'Content-Type': 'application/json'
  //         }
  //       }
  //       ) // Replace '/api/your-endpoint' with your API endpoint
  //     // Handle successful response
  //     console.log('Response:', response.data)
  //   } catch (error) {
  //     // Handle error
  //     console.error('Error:', error)
  //   }
  // }


  const onSubmit = data => {
    if (store.allData.some(u => u.first_name === data.first_name || u.username === data.username)) {
      store.allData.forEach(u => {
        if (u.email === data.email) {
          setError('email', {
            message: 'Email already exists!'
          })
        }
        if (u.username === data.username) {
          setError('username', {
            message: 'Username already exists!'
          })
        }
      })
    } else {
      dispatch(addUser({ ...data, role, currentPlan: plan }))
      toggle()
      reset()
    }
  }

  const handleClose = () => {
    setPlan('basic')
    setRole('subscriber')
    setValue('contact', Number(''))
    toggle()
    reset()
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h5'>Add New Donar</Typography>
        <IconButton
          size='small'
          onClick={handleClose}
          sx={{
            p: '0.438rem',
            borderRadius: 1,
            color: 'text.primary',
            backgroundColor: 'action.selected',
            '&:hover': {
              backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.16)`
            }
          }}
        >
          <Icon icon='tabler:x' fontSize='1.125rem' />
        </IconButton>
      </Header>
      <Box sx={{ p: theme => theme.spacing(0, 6, 6) }}>
        <form onSubmit={handleSubmitCampReg}>
          <Controller
            name='first_name'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                name='first_name'
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='First Name'
                onChange={onChange}
                placeholder='Raymond'
                error={Boolean(errors.first_name)}
                {...(errors.first_name && { helperText: errors.first_name.message })}
              />
            )}
          />
          <Controller
            name='last_name'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                name='last_name'
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Last Name'
                onChange={onChange}
                placeholder='Redemption'
                error={Boolean(errors.last_name)}
                {...(errors.last_name && { helperText: errors.last_name.message })}
              />
            )}
          />
          <Controller
            name='added_by'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                name='added_by'
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Added By'
                onChange={onChange}
                placeholder='Added by Chaim levilev'
                error={Boolean(errors.added_by)}
                {...(errors.added_by && { helperText: errors.added_by.message })}
              />
            )}
          />
           <Controller
            name='campaign'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                name='campaign'
                fullWidth
                value={value}
                sx={{ mb: 4 }}
                label='Campaign'
                onChange={onChange}
                placeholder='Go Home'
                error={Boolean(errors.campaign)}
                {...(errors.campaign && { helperText: errors.campaign.message })}
              />
            )}
          />
          <Controller
            name='email'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                name='email'
                fullWidth
                type='email'
                label='Email Address'
                value={value}
                sx={{ mb: 4 }}
                onChange={onChange}
                error={Boolean(errors.emailaddress)}
                placeholder='redray@gmail.com'
                {...(errors.emailaddress && { helperText: errors.emailaddress.message })}
              />
            )}
          />
          {/* <Controller
            name='password'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <CustomTextField
                name='password'
                fullWidth
                type='Password'
                value={value}
                sx={{ mb: 4 }}
                label='Password'
                onChange={onChange}
                error={Boolean(errors.password)}
                {...(errors.password && { helperText: errors.password.message })}
              />
            )}
          /> */}

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button type='submit' variant='contained' sx={{ mr: 3 }}>
              Submit
            </Button>
            <Button variant='tonal' color='secondary' onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarAddUser
