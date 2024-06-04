import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialUser = {
  isAuthed: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    setAuthed: (state, action: PayloadAction<boolean>) => {
      state.isAuthed = action.payload;
    }
  },
});

export default userSlice.reducer;
export const { setAuthed } = userSlice.actions;