/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = role => {
  if (role === 'camp_admin') return '/campadmin/dashboard'
  if (role === 'donar') return '/donar/dashboard'
  else return '/dashboards/analytics'
}

export default getHomeRoute
