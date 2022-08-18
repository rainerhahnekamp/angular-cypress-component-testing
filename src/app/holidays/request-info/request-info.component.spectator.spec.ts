import { fakeAsync, TestBed } from '@angular/core/testing';
import { RequestInfoComponent } from './request-info.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { byTestId, createComponentFactory } from '@ngneat/spectator/jest';

describe('Request Info Component in Spectator', () => {
  const createComponent = createComponentFactory({
    component: RequestInfoComponent,
    declareComponent: false,
    imports: [
      NoopAnimationsModule,
      RequestInfoComponent,
      HttpClientTestingModule,
    ],
  });

  it('should find Domgasse 5', fakeAsync(() => {
    const spectator = createComponent();
    spectator.typeInElement('Domgassse 5', byTestId('address'));
    spectator.click(byTestId('btn-search'));

    TestBed.inject(HttpTestingController)
      .expectOne((req) => !!req.url.match(/nominatim/))
      .flush([true]);
    spectator.tick();

    expect(spectator.query(byTestId('lookup-result'))).toHaveText(
      'Brochure sent'
    );
  }));
});
