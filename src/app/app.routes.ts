import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'holidays',
        loadChildren: () =>
          import('./holidays/holidays.module').then((m) => m.HolidaysModule),
      },
    ],
  },
];
