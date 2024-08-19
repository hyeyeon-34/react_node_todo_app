import { createSlice } from '@reduxjs/toolkit'; // 1. slice 생성

const detailSlice = createSlice({
  name: 'detaill',
  initialState: {
    isOpen: false,
    modalType: 'detail',
    task: null,
  },
  reducers: {
    openDetail: (state, action) => {
      state.isOpen = true;
      state.modalType = action.payload.modalType;
      state.task = action.payload.task;
      console.log(state.modalType, state.task);
    },
    closeDetail: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openDetail, closeDetail } = detailSlice.actions;
export default detailSlice.reducer;
