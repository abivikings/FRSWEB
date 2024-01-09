export default {
  meEndpoint: process.env.NEXT_PUBLIC_BASE_URL + '/api/auth_me/',
  loginEndpoint: process.env.NEXT_PUBLIC_BASE_URL + '/api/login/',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken', // logout | refreshToken
  createCampaign: process.env.NEXT_PUBLIC_BASE_URL +  '/api/campaigns/',
  campaignDetails: process.env.NEXT_PUBLIC_BASE_URL +  '/api/campaign-details/',
  addDonar: process.env.NEXT_PUBLIC_BASE_URL +  '/api/donor/',
  superAdminDashboard: process.env.NEXT_PUBLIC_BASE_URL +  '/api/super_admin_dashboard/',
  paymentDonate: process.env.NEXT_PUBLIC_BASE_URL +  '/api/donate/'
}
