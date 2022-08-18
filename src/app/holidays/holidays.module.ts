import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HolidaysComponent } from './holidays/holidays.component';
import { HolidaysComponentModule } from './holidays/holidays.component.module';
import { RequestInfoComponent } from './request-info/request-info.component';

@NgModule({
  imports: [
    HolidaysComponentModule,
    RequestInfoComponent,
    RouterModule.forChild([
      {
        path: '',
        component: HolidaysComponent,
      },
      {
        path: 'request-info/:holidayId',
        component: RequestInfoComponent,
      },
    ]),
  ],
})
export class HolidaysModule {}
