import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faculty10Component } from './faculty10.component';

describe('Faculty10Component', () => {
  let component: Faculty10Component;
  let fixture: ComponentFixture<Faculty10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Faculty10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Faculty10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
