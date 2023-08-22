import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import produtosReducer from './reducers/carrinho'
import favoritosReducer from './reducers/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    produtos: produtosReducer,
    favoritos: favoritosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
