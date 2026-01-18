import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
  name: "products",
  initialState: { items: [] },
  reducers: {
    setProducts: (state, action) => { state.items = action.payload; }
  }
});

export const { setProducts } = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/api/products");
  dispatch(setProducts(res.data));
};

export default productSlice.reducer;
