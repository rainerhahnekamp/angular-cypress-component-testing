import { RequestInfoComponent } from './request-info.component';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

it('should test Request Info', fakeAsync(() => {
  const fixture = TestBed.configureTestingModule({
    imports: [
      RequestInfoComponent,
      HttpClientTestingModule,
      NoopAnimationsModule,
    ],
  }).createComponent(RequestInfoComponent);

  fixture.detectChanges();

  const input = fixture.debugElement.query(By.css('[data-testid=address]'))
    .nativeElement as HTMLInputElement;
  input.value = 'Domgasse 5';
  input.dispatchEvent(new Event('input'));

  fixture.debugElement
    .query(By.css('[data-testid=btn-search]'))
    .nativeElement.click();

  TestBed.inject(HttpTestingController)
    .expectOne((req) => !!req.url.match(/nominatim/))
    .flush([true]);
  tick();
  fixture.detectChanges();

  const message = fixture.debugElement.query(
    By.css('[data-testid=lookup-result]')
  ).nativeElement as HTMLParagraphElement;

  expect(message.textContent).toBe('Brochure sent');
}));
