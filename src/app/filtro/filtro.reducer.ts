import { createReducer, on } from '@ngrx/store';
import * as actionsFilter from './filtro.actions';
import { filtrosVarios } from './filtro.actions';

export const initialState: filtrosVarios = 'todos';

const _filtroReducer = createReducer(initialState,
  on(actionsFilter.setFiltro, (state, { filtro}) => filtro),
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}
