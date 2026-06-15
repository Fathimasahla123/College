import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  student: {}
}

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    saveStudent: (state, action) => {
        state.student = action.payload

    },
    clearStudent: (state) => {
      state.student = {}
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { saveStudent, clearStudent } = studentSlice.actions

export default studentSlice.reducer