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
      console.log(action.payload, "1");
    },
    // selectNameFilter: (state, action) => {
    //   state.name = action.payload;
    //   console.log(action.payload, "2");
    // },
  },
});

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;

export const selectFilterName = (state) => state.filters.name;
