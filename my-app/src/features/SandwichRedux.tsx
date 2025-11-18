
import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { addIngredient, reset } from "./sandwich/sandwichSlice"; 
import styles from "./SandwichRedux.module.css";
import type { AppDispatch } from "../app/store"; // Импортируем AppDispatch для типизации

export default function SandwichRedux(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();

  const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
  
  const sandwichText = "Sandwich: " + ingredients.join(' ');


  function handleAddIngredient(ingredient: string): void {
    dispatch(addIngredient(ingredient)); 
  }

  function handleReset(): void {
    dispatch(reset()); 
  }

  return (
    <div className={styles.container} >
      <h2>Sandwich (Redux Toolkit + TS)</h2>
      <input 
        type="text" 
        value={sandwichText} 
        readOnly 
        className={styles.sandwichInput} 
      />

      <div className={styles.btnContainer}>
        {/* Кнопки для добавления ингредиентов */}
        <button type="button" onClick={() => handleAddIngredient("🍞")} className={styles.btn}>
          🍞
        </button>
        <button type="button" onClick={() => handleAddIngredient("🥩")} className={styles.btn}>
          🥩
        </button>
        <button type="button" onClick={() => handleAddIngredient("🧀")} className={styles.btn}>
          🧀
        </button>
        
        <button type="button" onClick={handleReset} className={styles.btn}>
          Reset
        </button>
      </div>
     
    </div>
  );
}