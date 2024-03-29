import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniListaComponent } from './zaposleni-lista.component';

describe('ZaposleniListaComponent', () => {
  let component: ZaposleniListaComponent;
  let fixture: ComponentFixture<ZaposleniListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaposleniListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposleniListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
