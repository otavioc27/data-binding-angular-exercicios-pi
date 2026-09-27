import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelProjetos } from './painel-projetos';

describe('PainelProjetos', () => {
  let component: PainelProjetos;
  let fixture: ComponentFixture<PainelProjetos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PainelProjetos],
    }).compileComponents();

    fixture = TestBed.createComponent(PainelProjetos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
