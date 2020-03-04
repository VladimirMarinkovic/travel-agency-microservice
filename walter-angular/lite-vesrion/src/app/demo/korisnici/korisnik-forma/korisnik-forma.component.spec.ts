import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikFormaComponent } from './korisnik-forma.component';

describe('KorisnikFormaComponent', () => {
  let component: KorisnikFormaComponent;
  let fixture: ComponentFixture<KorisnikFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnikFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
