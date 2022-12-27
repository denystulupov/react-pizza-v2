import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type SortType = {
  name: string;
  sortProperty: 'rating' | 'price' | 'title';
  orderType: string;
};

interface FilterSliceState {
  searchValue: string;
  currentPage: number;
  categoryId: number;
  sort: SortType;
}

const initialState: FilterSliceState = {
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
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilter(state, action: PayloadAction<FilterSliceState>) {
      state.currentPage = Number(action.payload.currentPage) || initialState.currentPage;
      state.sort = action.payload.sort || initialState.sort;
      state.categoryId = Number(action.payload.categoryId) || initialState.categoryId;
    },
  },
});

export const { setCategoryId, setSort, setCurrentPage, setFilter, setSearchValue } =
  filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;

export default filterSlice.reducer;
