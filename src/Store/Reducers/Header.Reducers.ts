import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

interface ICheckoutState {
  search: string;
}

const initialState: ICheckoutState = {
  search: ''
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    onChangeSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    }
  }
});

export const { onChangeSearch } = headerSlice.actions;

export const selectData = (state: RootState) => state.header.search;

export default headerSlice.reducer;
