import { RequestInfoComponent } from './request-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  template: ` <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    /><app-request-info></app-request-info>`,
})
class WrapperComponent {}

it('should test request info', () => {
  cy.mount(WrapperComponent, {
    declarations: [WrapperComponent],
    imports: [RequestInfoComponent, HttpClientModule, BrowserAnimationsModule],
  });

  cy.intercept(/nominatim/, { body: [] });

  cy.testid('address').type('Domgasse 5');
  cy.testid('btn-search').click();
  cy.testid('lookup-result').should('have.text', 'Address not found');
});
