import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniFormaComponent } from './zaposleni-forma.component';

describe('ZaposleniFormaComponent', () => {
  let component: ZaposleniFormaComponent;
  let fixture: ComponentFixture<ZaposleniFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaposleniFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposleniFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
