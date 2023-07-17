import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

type Todos = string[];

const initialState: Todos = ['Fazer café', 'Estudar Redux', 'Estudar Zustand'];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ newTodo: string }>) => {
      state.push(action.payload.newTodo);
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { add } = todoSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
