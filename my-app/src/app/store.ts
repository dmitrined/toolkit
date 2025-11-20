import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/usersSlice'
import productsReducer from '../features/products/productsSlice'
import sandwichReducer from '../features/sandwich/sandwichSlice'

//→ Импортируем configureStore — простой способ создать store.
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
        products: productsReducer,
        sandwich: sandwichReducer,
    }
})

// Типы для useSelector и useDispatch

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// → Создаём типы для селектора и диспатчера, чтобы использовать в TS-компонентах.
