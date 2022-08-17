import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";
import {holidays} from "../data";

@Component({
  selector: 'eternal-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent  {
  holidays$ = of(holidays)
}
