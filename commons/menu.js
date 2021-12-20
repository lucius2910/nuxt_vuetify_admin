export default [
  {
    icon: 'mdi-home-variant-outline',
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    icon: 'mdi-account-cog-outline',
    title: 'Categories',
    subItems: [
      {
        title: 'Users',
        path: '/user',
      },
      {
        title: 'Login',
        path: '/login',
      },
    ],
  },
  {
    icon: 'mdi-cogs',
    title: 'Settings',
    subItems: [
      {
        title: 'Roles',
        path: '/role',
      },
      {
        title: 'Permission',
        path: '/permission',
      },
    ],
  },
]
