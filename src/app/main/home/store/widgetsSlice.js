import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getWidgets = createAsyncThunk(
  "home/widgets/getWidgets",
  async () => {
    const response = await axios.get("/api/home/widgets");
    const data = await response.data;
    return data;
  }
);

const widgetsAdapter = createEntityAdapter({});

export const { selectEntities: selectWidgets, selectById: selectWidgetById } =
  widgetsAdapter.getSelectors((state) => state.Home.widgets);

const widgetsSlice = createSlice({
  name: "home/widgets",
  initialState: widgetsAdapter.getInitialState(),
  reducers: {},
  extraReducers: {
    [getWidgets.fulfilled]: widgetsAdapter.setAll,
  },
});

export default widgetsSlice.reducer;
