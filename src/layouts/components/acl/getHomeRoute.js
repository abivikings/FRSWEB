/**
 *  Set Home URL based on User Roles
 */
const getHomeRoute = role => {
  if (role === 'super_admin') return '/admin/dashboards'
  if (role === 'camp_admin') return '/campadmin/dashboard'
  if (role === 'donar') return '/donar/dashboard'
  else return '/401'
}

export default getHomeRoute
