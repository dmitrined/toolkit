// src/app/store.ts

import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
// Импортируем только ваш срез сэндвича
import { sandwichSlice } from "../features/sandwich/sandwichSlice" 

// Убраны quotesApiSlice и setupListeners, так как они, вероятно, не нужны
// для простого управления ингредиентами сэндвича.

// `combineSlices` автоматически объединяет редукторы.
const rootReducer = combineSlices(
  // 👇 Теперь здесь только sandwichSlice
  sandwichSlice 
)

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>

// The store setup is wrapped in `makeStore` to allow reuse
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
   
    // Убрана middleware для quotesApiSlice, так как ее нет
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware()
    },
    preloadedState,
  })
  
  // Убраны setupListeners, так как они нужны только для RTK Query
  
  return store
}

export const store = makeStore()

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>