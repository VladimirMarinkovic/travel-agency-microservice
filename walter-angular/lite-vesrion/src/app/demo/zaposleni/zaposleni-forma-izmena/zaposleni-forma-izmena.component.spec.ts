import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniFormaIzmenaComponent } from './zaposleni-forma-izmena.component';

describe('ZaposleniFormaIzmenaComponent', () => {
  let component: ZaposleniFormaIzmenaComponent;
  let fixture: ComponentFixture<ZaposleniFormaIzmenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaposleniFormaIzmenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposleniFormaIzmenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
