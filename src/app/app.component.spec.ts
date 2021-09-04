import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { by, element, browser } from 'protractor';

import 'jasmine';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('test button', () => {
    browser.get('http://localhost:52603/twoway');
    expect(browser.getCurrentUrl()).toMatch('http://localhost:52603/twoway');
  });
});
