import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client, apiUrl } from "../api/client";
import { v4 as uuidv4 } from 'uuid';

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
  },
});

async function getFinalNews() {
  const formatedNwews = await client(apiUrl);
  const newsNews = formatedNwews.data.articles;
  
  newsNews.map((news: any) => {
    news.id = uuidv4()
  })
  
  return newsNews;
}

export default newsSlice.reducer;

export const getNews = createAsyncThunk("news/fetch", () => {
  return getFinalNews();
});
