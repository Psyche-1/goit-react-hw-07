import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
      // console.log(action.payload);
    },
    selectNameFilter: (state, action) => {
      state.name = action.payload;
      // console.log(action.payload);
    },
  },
});

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;
