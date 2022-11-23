import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
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
    setSearchValue(state, action) {
      state.searchValue = action.payload;
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

export const { setCategoryId, setSort, setCurrentPage, setFilter, setSearchValue } =
  filterSlice.actions;

export const selectFilter = (state) => state.filter;
export const selectSort = (state) => state.filter.sort;

export default filterSlice.reducer;
