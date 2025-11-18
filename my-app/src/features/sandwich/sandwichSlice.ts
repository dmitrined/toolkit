// src/store/sandwichSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Определение типа для состояния этого среза
interface SandwichState {
  ingredients: string[];
}

// Начальное состояние
const initialState: SandwichState = {
  ingredients: ['🍞'], // Начинаем с хлеба
};

export const sandwichSlice = createSlice({
  name: 'sandwich', // Имя среза, используется для формирования типов действий
  initialState,
  reducers: {
    // Reducer для добавления ингредиента. 
    // PayloadAction<string> типизирует полезную нагрузку
    addIngredient: (state, action: PayloadAction<string>) => {
      // RTK использует Immer, что позволяет "мутировать" состояние 
      // безопасно с точки зрения иммутабельности
      state.ingredients.push(action.payload);
    },
    
    // Reducer для сброса. Не принимает полезной нагрузки.
    reset: (state) => {
      // Возвращаем начальное состояние
      state.ingredients = initialState.ingredients;
    },
  },
});

// Экспортируем сгенерированные генераторы действий (Action Creators)
export const { addIngredient, reset } = sandwichSlice.actions;

// Экспортируем сам редьюсер
export default sandwichSlice.reducer;