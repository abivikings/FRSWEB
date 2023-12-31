// ** MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const CheckboxesBasic = () => {
  return (
    <FormGroup row>
      <FormControlLabel label='Yes' control={<Checkbox name='basic-checked' />} />
    </FormGroup>
  )
}

export default CheckboxesBasic
