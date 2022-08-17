import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import {AddressLookuper} from "../address-lookuper.service";

@Component({
  selector: 'app-request-info',
  templateUrl: './request-info.component.html'
})
export class RequestInfoComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({
    address: []
  });
  title = 'Request More Information';
  @Input() address = '';
  submitter$ = new Subject<void>();
  lookupResult$: Observable<string> | undefined;

  constructor(private formBuilder: FormBuilder, private lookuper: AddressLookuper) {}

  ngOnInit(): void {
    if (this.address) {
      this.formGroup.setValue({ addresss: this.address });
    }

    this.lookupResult$ = this.submitter$.pipe(
      switchMap(() => this.lookuper.lookup(this.formGroup.value.address)),
      delay(1000),
      map((found) => (found ? 'Brochure sent' : 'Address not found'))
    );
  }

  search(): void {
    this.submitter$.next();
  }
}
