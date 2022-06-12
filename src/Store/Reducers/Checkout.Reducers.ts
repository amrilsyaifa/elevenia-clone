import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IListDataProduct } from 'src/Pages/Home/Hooks/useHome';
import type { RootState } from '..';

interface ICheckoutState {
  data: IListDataProduct[];
}

const initialState: ICheckoutState = {
  data: []
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addDataCheckout: (state, action: PayloadAction<IListDataProduct>) => {
      state.data = [...state.data, action.payload];
    },
    removeDataCheckout: (state, action: PayloadAction<number>) => {
      const copyStateData = [...state.data];
      copyStateData.splice(action.payload, 1);
      state.data = copyStateData;
    }
  }
});

export const { addDataCheckout, removeDataCheckout } = checkoutSlice.actions;

export const selectData = (state: RootState) => state.checkout.data;

export default checkoutSlice.reducer;
