import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,

  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const product = action.payload

      if (state.itens.find((produto) => produto.id === product.id)) {
        const favoritosSemProduto = state.itens.filter(
          (produto) => produto.id !== product.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(product)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
