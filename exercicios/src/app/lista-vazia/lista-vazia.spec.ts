import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVazia } from './lista-vazia';

describe('ListaVazia', () => {
  let component: ListaVazia;
  let fixture: ComponentFixture<ListaVazia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaVazia],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaVazia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
