
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SandwichState {
  ingredients: string[];
}


const initialState: SandwichState = {
  ingredients: ['🍞'], 
};

export const sandwichSlice = createSlice({
  name: 'sandwich', 
  initialState,
  reducers: {
    
    addIngredient: (state, action: PayloadAction<string>) => {
      
      state.ingredients.push(action.payload);
    },
    
    
    reset: (state) => {
      
      state.ingredients = initialState.ingredients;
    },
  },
});


export const { addIngredient, reset } = sandwichSlice.actions;

export default sandwichSlice.reducer;