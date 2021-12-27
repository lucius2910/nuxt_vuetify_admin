export default [
  {
    icon: 'mdi-home-variant-outline',
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    icon: 'mdi-cogs',
    title: 'Settings',
    subItems: [
      {
        title: 'Roles',
        path: '/setting/role',
      },
      {
        title: 'Permission',
        path: '/setting/permission',
      },
    ],
  },
  {
    icon: 'mdi-account-cog-outline',
    title: 'Sample',
    subItems: [
      {
        title: 'Toast',
        path: '/sample/toast',
      },
      {
        title: 'Dropdown',
        path: '/sample/dropdown',
      },
      {
        title: 'Table',
        path: '/sample/table',
      },
      {
        title: 'Form',
        path: '/sample/form',
      },
      {
        title: 'Login',
        path: '/login',
      },
    ],
  },
]
