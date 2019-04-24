import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarIndicacaoComponent } from './listar-indicacao.component';

describe('ListarIndicacaoComponent', () => {
  let component: ListarIndicacaoComponent;
  let fixture: ComponentFixture<ListarIndicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarIndicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarIndicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
