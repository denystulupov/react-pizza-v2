import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  categoryId: 0,
  sort: {
    name: 'популярности ↓',
    sortProperty: 'rating',
    orderType: 'desc',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilter(state, action) {
      state.currentPage = Number(action.payload.currentPage) || initialState.currentPage;
      state.sort = action.payload.sort || initialState.sort;
      state.categoryId = Number(action.payload.categoryId) || initialState.categoryId;
    },
  },
});

export const { setCategoryId, setSort, setCurrentPage, setFilter } = filterSlice.actions;

export default filterSlice.reducer;
