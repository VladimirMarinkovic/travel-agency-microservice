import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}


const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: 'feather icon-home',
        classes: 'nav-item',
      }
    ]
  },



  // {
  //   id: 'ui-element',
  //   title: 'UI ELEMENT',
  //   type: 'group',
  //   icon: 'icon-ui',
  //   children: [
  //     {
  //       id: 'components',
  //       title: 'Components',
  //       type: 'collapse',
  //       icon: 'feather icon-box',
  //       children: [
  //         {
  //           id: 'button',
  //           title: 'Button',
  //           type: 'item',
  //           url: '/basic/button'
  //         },
  //         {
  //           id: 'badges',
  //           title: 'Badges',
  //           type: 'item',
  //           url: '/basic/badges'
  //         },
  //         {
  //           id: 'breadcrumb-pagination',
  //           title: 'Breadcrumb & Pagination',
  //           type: 'item',
  //           url: '/basic/breadcrumb-paging'
  //         },
  //         {
  //           id: 'collapse',
  //           title: 'Collapse',
  //           type: 'item',
  //           url: '/basic/collapse'
  //         },
  //         {
  //           id: 'tabs-pills',
  //           title: 'Tabs & Pills',
  //           type: 'item',
  //           url: '/basic/tabs-pills'
  //         },
  //         {
  //           id: 'typography',
  //           title: 'Typography',
  //           type: 'item',
  //           url: '/basic/typography'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'forms',
  //   title: 'Forms & Tables',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'forms-element',
  //       title: 'Forms Elements',
  //       type: 'item',
  //       url: '/forms/basic',
  //       icon: 'feather icon-file-text',
  //       classes: 'nav-item'
  //     },
  //     {
  //       id: 'tables',
  //       title: 'Tables',
  //       type: 'item',
  //       url: '/tables/bootstrap',
  //       icon: 'feather icon-server',
  //       classes: 'nav-item'
  //     }
  //   ]
  // },
  // {
  //   id: 'chart-maps',
  //   title: 'Chart',
  //   type: 'group',
  //   icon: 'icon-charts',
  //   children: [
  //     {
  //       id: 'charts',
  //       title: 'Charts',
  //       type: 'item',
  //       url: '/charts/morris',
  //       icon: 'feather icon-pie-chart',
  //       classes: 'nav-item'
  //     }
  //   ]
  // },





  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: 'icon-pages',
    children: [
      // {
      //   id: 'auth',
      //   title: 'Authentication',
      //   type: 'collapse',
      //   icon: 'feather icon-lock',
      //   children: [
      //     {
      //       id: 'signup',
      //       title: 'Registracija',
      //       type: 'item',
      //       url: '/auth/signup',
      //       target: true,
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'signin',
      //       title: 'Login',
      //       type: 'item',
      //       url: '/auth/signin',
      //       target: true,
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'logout',
      //       title: 'Logout',
      //       type: 'item',
      //       url: '/auth/logout',
      //       target: true,
      //       breadcrumbs: false
      //     }
      //   ]
      // },
      {
        id: 'pocetna',
        title: 'Pocetna',
        type: 'item',
        url: '/pocetna',
        icon: 'feather icon-sidebar',
        classes: 'nav-item',
      },
      {
        id: 'korisnici',
        title: 'Korisnici',
        type: 'item',
        url: '/korisnici',
        icon: 'feather icon-sidebar',
        classes: 'nav-item',
      },
      {
        id: 'zaposleni',
        title: 'Zaposleni',
        type: 'item',
        url: '/zaposleni',
        icon: 'feather icon-sidebar',
        classes: 'nav-item',
      },


    ]
  },
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
