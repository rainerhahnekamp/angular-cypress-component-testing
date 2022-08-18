import { TestBed } from '@angular/core/testing';
import { RequestInfoComponent } from './request-info.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Request Info Component in Testing Library', () => {
  it('should find Domgasse 5', async () => {
    await render('<app-request-info></app-request-info>', {
      imports: [
        NoopAnimationsModule,
        RequestInfoComponent,
        HttpClientTestingModule,
      ],
    });
    const user = userEvent.setup();

    await user.type(screen.getByTestId('address'), 'Domgasse 5');
    await user.click(screen.getByTestId('btn-search'));
    TestBed.inject(HttpTestingController)
      .expectOne((req) => !!req.url.match(/nominatim/))
      .flush([true]);

    expect(await screen.findByTestId('lookup-result')).toHaveTextContent(
      'Brochure sent'
    );
  });
});
