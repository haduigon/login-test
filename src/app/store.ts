import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from '../features/user';
import newsReducer from '../features/news';
// import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";

export const store = configureStore({
  reducer: {
    user: userReducer,
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
