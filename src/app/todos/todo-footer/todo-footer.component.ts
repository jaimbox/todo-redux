import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import * as actionsFilter from '../../filtro/filtro.actions';
import * as actions from '../../todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actionsFilter.filtrosVarios = 'todos';
  filtros: actionsFilter.filtrosVarios[] = ['todos', 'completados', 'pendientes'];

  pendientes = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado).length;
    });
  }

  cambiarFiltro(filtro: actionsFilter.filtrosVarios) {
    this.store.dispatch(actionsFilter.setFiltro({ filtro }));
  }

  limpiarCompletados() {
    this.store.dispatch(actions.limpiarTodos());
  }
}
