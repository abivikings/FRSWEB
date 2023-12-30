const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: 'tabler:smart-home',
      badgeColor: 'error',
      path: '/dashboards/analytics'
    },
    {
      title: 'User',
      icon: 'tabler:user',
      children: [
        {
          title: 'List',
          path: '/apps/user/list'
         },
        // {
        //   title: 'View',
        //   children: [
        //     {
        //       title: 'Account',
        //       path: '/apps/user/view/account'
        //     },
        //     {
        //       title: 'Security',
        //       path: '/apps/user/view/security'
        //     },
        //     {
        //       title: 'Billing & Plans',
        //       path: '/apps/user/view/billing-plan'
        //     },
        //     {
        //       title: 'Notifications',
        //       path: '/apps/user/view/notification'
        //     },
        //     {
        //       title: 'Connection',
        //       path: '/apps/user/view/connection'
        //     }
        //   ]
        // }
      ]
    },
    {
      title: 'Campaign List',
      icon: 'tabler:smart-home',
      badgeColor: 'error',
      path: '/admin/campaigns'
    },
    {
      title: 'Dashboard',
      icon: 'tabler:smart-home',
      badgeColor: 'error',
      path: '/campadmin/dashboard',
      action: 'read',
      subject: 'campadmin-page'
    },
    {
      title: 'Home',
      icon: 'tabler:smart-home',
      badgeColor: 'error',
      path: '/campadmin/home',
      action: 'read',
      subject: 'home-page'
    },
    {
      title: 'Camp List',
      icon: 'tabler:smart-home',
      badgeColor: 'error',
      path: '/campadmin/campaigns',
      action: 'read',
      subject: 'camplist-page'
    },
    {
      title: 'Add Donar',
      icon: 'tabler:smart-home',
      badgeColor: 'error',
      path: '/campadmin/adddonar',
      action: 'read',
      subject: 'adddonar-page'
    },
    {
      title: 'All Donar',
      icon: 'tabler:smart-home',
      badgeColor: 'error',
      path: '/campadmin/donarlist',
      action: 'read',
      subject: 'alldonarlist-page'
    },
    {
      title: 'Donar Dashboard',
      icon: 'tabler:smart-home',
      badgeColor: 'error',
      path: '/donar/dashboard',
      action: 'read',
      subject: 'donardashboard-page'
    },
    {
      title: 'Add Payment',
      icon: 'tabler:smart-home',
      badgeColor: 'error',
      path: '/donar/addpayment',
      action: 'read',
      subject: 'addpayment-page'
    }
  ]
}

export default navigation
