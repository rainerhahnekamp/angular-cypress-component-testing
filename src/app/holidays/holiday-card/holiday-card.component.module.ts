import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HolidayCardComponent } from './holiday-card.component';

@NgModule({
  declarations: [HolidayCardComponent],
  exports: [HolidayCardComponent],
  imports: [MatCardModule, CommonModule, RouterModule, MatButtonModule]
})
export class HolidayCardComponentModule {}
