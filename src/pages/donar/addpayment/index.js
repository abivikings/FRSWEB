// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Accordion from '@mui/material/Accordion'
import FormLabel from '@mui/material/FormLabel'
import Typography from '@mui/material/Typography'
import RadioGroup from '@mui/material/RadioGroup'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import Payment from 'payment'
import Cards from 'react-credit-cards'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Styled Component Imports
import CardWrapper from 'src/@core/styles/libs/react-credit-cards'

// ** Util Import
import { formatCVC, formatExpirationDate, formatCreditCardNumber } from 'src/@core/utils/format'

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Source code imports
import * as source from 'src/views/forms/form-elements/checkbox/CheckboxesSourceCode'


// ** Demo Components Imports
import CheckboxesBasic from 'src/views/donor/addpayment/CheckboxesBasic'


// Styled component for the Box wrappers in Delivery Options' accordion
const BoxWrapper = styled(Box)(({ theme }) => ({
  borderWidth: 1,
  display: 'flex',
  cursor: 'pointer',
  borderStyle: 'solid',
  padding: theme.spacing(5),
  borderColor: theme.palette.divider,
  '&:first-of-type': {
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius
  },
  '&:last-of-type': {
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius
  }
}))

const DonarAddPaymentPage = () => {
  // ** States
  const [cvc, setCvc] = useState('')
  const [name, setName] = useState('')
  const [focus, setFocus] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [option, setOption] = useState('standard')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [expanded, setExpanded] = useState('panel3')

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const handleBlur = () => setFocus('')

  const handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value, Payment)
      setCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
      setExpiry(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value, cardNumber, Payment)
      setCvc(target.value)
    }
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<Icon icon='tabler:chevron-down' />}
          id='form-layouts-collapsible-header-3'
          aria-controls='form-layouts-collapsible-content-3'
        >
          <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
            Payment Method
          </Typography>
        </AccordionSummary>
        <Divider sx={{ m: '0 !important' }} />
        <AccordionDetails>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Grid container spacing={6}>
              <Grid item xs={12}>
                  <CardSnippet
                    title='Would you like to store your details for your upcoming donation transaction?'
                    code={{
                      tsx: null,
                      jsx: source.checkboxesbasicjsxcode
                    }}
                  >
                    <CheckboxesBasic />
                  </CardSnippet>
                </Grid>
                <Grid item xs={12}>
                  <RadioGroup
                    row
                    value={paymentMethod}
                    aria-label='payment type'
                    name='form-layouts-collapsible-payment-radio'
                    onChange={e => setPaymentMethod(e.target.value)}
                  >
                    <FormControlLabel value='card' control={<Radio />} label='Credit/Debit/ATM Card/Visa/ Master Card' />
                    {/* <FormControlLabel value='cash' control={<Radio />} label='Cash on Delivery' /> */}
                  </RadioGroup>
                </Grid>
                {paymentMethod === 'card' ? (
                  <Grid item xs={12}>
                    <Grid container spacing={6}>
                      <Grid item xs={12}>
                        <CardWrapper>
                          <Cards cvc={cvc} focused={focus} expiry={expiry} name={name} number={cardNumber} />
                        </CardWrapper>
                      </Grid>
                      <Grid item xs={12} md={8} xl={6} sx={{ mt: 2 }}>
                        <Grid container spacing={6}>
                          <Grid item xs={12}>
                            <CustomTextField
                              fullWidth
                              name='number'
                              value={cardNumber}
                              autoComplete='off'
                              label='Card Number'
                              onBlur={handleBlur}
                              onChange={handleInputChange}
                              placeholder='0000 0000 0000 0000'
                              onFocus={e => setFocus(e.target.name)}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <CustomTextField
                              fullWidth
                              name='name'
                              value={name}
                              label='Name'
                              autoComplete='off'
                              onBlur={handleBlur}
                              placeholder='John Doe'
                              onFocus={e => setFocus(e.target.name)}
                              onChange={e => setName(e.target.value)}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <CustomTextField
                              fullWidth
                              name='expiry'
                              value={expiry}
                              autoComplete='off'
                              label='Expiry Date'
                              placeholder='MM/YY'
                              onBlur={handleBlur}
                              onChange={handleInputChange}
                              inputProps={{ maxLength: '5' }}
                              onFocus={e => setFocus(e.target.name)}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <CustomTextField
                              fullWidth
                              name='cvc'
                              value={cvc}
                              label='CVC Code'
                              autoComplete='off'
                              onBlur={handleBlur}
                              onChange={handleInputChange}
                              onFocus={e => setFocus(e.target.name)}
                              placeholder={Payment.fns.cardType(cardNumber) === 'amex' ? '1234' : '123'}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
        <Divider sx={{ m: '0 !important' }} />
        <AccordionDetails>
          <Button type='submit' variant='contained' sx={{ mr: 4 }}>
            Payment
          </Button>
          <Button type='reset' variant='tonal' color='secondary'>
            Reset
          </Button>
        </AccordionDetails>
      </Accordion>
    </form>
  )
}
DonarAddPaymentPage.acl = {
  action: 'read',
  subject: 'addpayment-page'
}

export default DonarAddPaymentPage




// // ** React Imports
// import { useContext } from 'react'

// // ** Context Imports
// import { AbilityContext } from 'src/layouts/components/acl/Can'

// // ** MUI Imports
// import Grid from '@mui/material/Grid'
// import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
// import Typography from '@mui/material/Typography'
// import CardContent from '@mui/material/CardContent'

// const DonarAddPaymentPage = () => {
//   // ** Hooks
//   const ability = useContext(AbilityContext)

//   return (
//     <Grid container spacing={6}>
//       <Grid item md={6} xs={12}>
//         <Card>
//           <CardHeader title='Payment ' />
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
//     </Grid>
//   )
// }
// DonarAddPaymentPage.acl = {
//   action: 'read',
//   subject: 'addpayment-page'
// }

// export default DonarAddPaymentPage
