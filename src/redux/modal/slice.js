import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalOpened: false,
    id: null,
  },
  reducers: {
    setModal(state, action) {
      return {
        ...state,
        isModalOpened: !state.isModalOpened,
        id: action.payload,
      };
    },
  },
});

export const { setModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
