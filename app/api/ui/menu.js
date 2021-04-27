module.exports = [
  {
    key: 'home',
    name: 'Home',
    icon: 'home',
    link: '/app',
    child: [
      {
        key: 'dashboard',
        name: 'Dashboard',
        title: true,


      },
      {
        key: 'dashboard',
        name: 'Dashboard',
        icon: 'settings_brightness',
        link: '/app'
      }
    ]
  },

  {
    key: 'users',
    name: 'Users',
    icon: 'people',

    child: [
      {
        key: 'users',
        name: 'Users',
        title: true,
      },
      {
        key: 'add-users',
        name: 'Add Users',
        icon: 'nature_people',
        link: '/app/add-users'
      },
      {
        key: 'list-users',
        name: 'List users',
        icon: 'nature_people',
        link: '/app/list-users'
      },
      {
        key: 'events',
        name: 'Events',
        icon: 'nature_people',
        link: '/app/events'
      },


    ]
  },
  {
    key: 'company',
    name: 'Company',
    icon: 'domain',

    child: [
      {
        key: 'company',
        name: 'Company',
        title: true,
      },
      {
        key: 'division',
        name: 'Division',
        icon: 'web_asset',
        link: '/app/department'
      },
      {
        key: 'comprehensive-company',
        name: 'Comprehensive Company',
        icon: 'web_asset',
        link: '/app/comprehensive-company'
      },
      {
        key: 'add-client-company',
        name: 'Add Client Company',
        icon: 'web_asset',
        link: '/app/add-client-company'
      },
      {
        key: 'list-client-company',
        name: 'List Client Company',
        icon: 'web_asset',
        link: '/app/list-client-company'
      }

    ]
  },
  {
    key: 'form-builder',
    name: 'Form',
    icon: 'domain',

    child: [
      {
        key: 'form-builder',
        name: 'Form',
        title: true,
      },
      {
        key: 'form-builder-add-form',
        name: 'Add Form',
        icon: 'web_asset',
        link: '/app/add-form'
      }


    ]
  }
];
