import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3000/message/random";

export const fetchMessage = createAsyncThunk('message/random',async () => {
  const response = await axios.get(URL);
  const data = await response.data;
  console.log(data);
  return data.greeting;
});

const initialState = {
  message: "",
};
export const greetingSlice = createSlice({
  name: "greeting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessage.fulfilled, (state, action) => {
      state.message = action.payload; // Update 'message' in the state
    });
  },
})

export const { setMessage } = greetingSlice.actions;
export const greetingReducer =  greetingSlice.reducer;