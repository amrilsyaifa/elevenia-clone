import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IListDataProduct } from 'src/Pages/Home/Hooks/useHome';
import type { RootState } from '..';

// Define a type for the slice state
interface ICheckoutState {
  data: IListDataProduct[];
}

// Define the initial state using that type
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
      const copyStateData = [...state.data].splice(1, action.payload);
      state.data = copyStateData;
    }
  }
});

export const { addDataCheckout, removeDataCheckout } = checkoutSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectData = (state: RootState) => state.checkout.data;

export default checkoutSlice.reducer;
