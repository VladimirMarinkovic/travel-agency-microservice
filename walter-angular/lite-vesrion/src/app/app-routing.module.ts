import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{
        path: 'dashboard/default',
        redirectTo: 'dashboard/default',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: './demo/dashboard/dashboard.module#DashboardModule'
      },





      // {
      //   path: 'basic',
      //   loadChildren: './demo/ui-elements/ui-basic/ui-basic.module#UiBasicModule'
      // },
      // {
      //   path: 'forms',
      //   loadChildren: './demo/pages/form-elements/form-elements.module#FormElementsModule'
      // },
      // {
      //   path: 'tables',
      //   loadChildren: './demo/pages/tables/tables.module#TablesModule'
      // },
      // {
      //   path: 'charts',
      //   loadChildren: './demo/pages/core-chart/core-chart.module#CoreChartModule'
      // },

      {
        path: 'pocetna',
        loadChildren: './demo/pocetna/pocetna.module#PocetnaModule',
      },
      {
        path: 'korisnici',
        loadChildren: './demo/korisnici/korisnici.module#KorisniciModule',
      },
      {
        path: 'zaposleni',
        loadChildren: './demo/zaposleni/zaposleni.module#ZaposleniModule',
      },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './demo/pages/authentication/authentication.module#AuthenticationModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
