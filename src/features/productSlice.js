import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const api = import.meta.env.VITE_API_URL;
// const api_local= import.meta.env.VITE_LOCAL_URL;



const productSlice = createSlice({
  name: "products",
  initialState: { items: [] },
  reducers: {
    setProducts: (state, action) => { state.items = action.payload; }
  }
});

export const { setProducts } = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get(`${api_local}/api/products`);
  dispatch(setProducts(res.data));
};

export default productSlice.reducer;
