import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HolidaysComponent } from './holidays/holidays.component';
import { HolidaysComponentModule } from './holidays/holidays.component.module';
import { RequestInfoComponent } from './request-info/request-info.component';
import { RequestInfoComponentModule } from './request-info/request-info.component.module';

@NgModule({
  imports: [
    HolidaysComponentModule,
    RequestInfoComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HolidaysComponent
      },
      {
        path: 'request-info/:holidayId',
        component: RequestInfoComponent
      }
    ]),
  ]
})
export class HolidaysModule {}
