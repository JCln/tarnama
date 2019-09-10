import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpCardComponent } from './wp-card.component';

describe('WpCardComponent', () => {
  let component: WpCardComponent;
  let fixture: ComponentFixture<WpCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
