import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlEventComponent } from './html-event.component';

describe('HtmlEventComponent', () => {
  let component: HtmlEventComponent;
  let fixture: ComponentFixture<HtmlEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
