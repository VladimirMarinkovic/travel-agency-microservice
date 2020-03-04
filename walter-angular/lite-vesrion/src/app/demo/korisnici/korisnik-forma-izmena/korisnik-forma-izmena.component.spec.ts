import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikFormaIzmenaComponent } from './korisnik-forma-izmena.component';

describe('KorisnikFormaIzmenaComponent', () => {
  let component: KorisnikFormaIzmenaComponent;
  let fixture: ComponentFixture<KorisnikFormaIzmenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnikFormaIzmenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikFormaIzmenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
