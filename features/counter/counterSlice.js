import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
}

export const counterSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { setToken } = counterSlice.actions

export default counterSlice.reducer