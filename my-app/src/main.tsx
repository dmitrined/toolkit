// src/main.tsx или src/index.tsx

import { StrictMode } from "react"
import { App } from "./App"
import { createRoot } from "react-dom/client" // <--- Правильный импорт
import { Provider } from "react-redux"
import { store } from "./app/store" // Убедитесь, что store корректно экспортируется

const container = document.getElementById("root")

if (container) {
  // Используем импортированную функцию createRoot
  const root = createRoot(container) 

  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  )
} else {
  // Отличная обработка ошибки, если корневой элемент не найден
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}

// УДАЛИТЬ:
// function createRoot(container: HTMLElement) {
//   throw new Error("Function not implemented.")
// }