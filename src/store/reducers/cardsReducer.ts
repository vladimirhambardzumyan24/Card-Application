import { createSlice } from '@reduxjs/toolkit'
import { CardsInitialState } from '../../types/GlobalTypes'
import { getCardsDataCookie, removeCardDataCookie, setCardsDataCookie } from '../../utils/CookieUtils'

const initialState: CardsInitialState = {
  cardsData:  getCardsDataCookie() || [],
}

export const counterSlice = createSlice({
  name: 'cardsReducer',
  initialState,
  reducers: {
    setCardsData: (state, { payload }) => {
      setCardsDataCookie(
          payload
      )
      return {
          ...state,
          cardsData: payload
      }
  },
  removeCardData: (state) => {
      removeCardDataCookie()
      return {
          ...state,
          cardsData: []
      }
  }
  },
})

export const { setCardsData, removeCardData } = counterSlice.actions

export default counterSlice.reducer