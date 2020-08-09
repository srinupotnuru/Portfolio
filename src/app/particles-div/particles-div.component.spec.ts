import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticlesDivComponent } from './particles-div.component';

describe('ParticlesDivComponent', () => {
  let component: ParticlesDivComponent;
  let fixture: ComponentFixture<ParticlesDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticlesDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticlesDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
