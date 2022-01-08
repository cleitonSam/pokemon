import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAnimationComponent } from './pokemon-animation.component';

describe('PokemonAnimationComponent', () => {
  let component: PokemonAnimationComponent;
  let fixture: ComponentFixture<PokemonAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
