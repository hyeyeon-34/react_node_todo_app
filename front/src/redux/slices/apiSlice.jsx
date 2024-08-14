import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'; // 툴킷 임포트
import { GET_TASKS_API_URL } from '../../utills/apiUrl'; // API URL 임포트
import { getRequest } from '../../utills/requestMethods'; // API 메서드 임포트

// 공통된 비동기 액션 생성 로직을 별도의 함수로 분리
const getItemsFetchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async (userId) => {
    console.log(apiURL, userId);
    const fullPath = `${apiURL}/${userId}`;
    return await getRequest(fullPath);
  });
};

export const fetchGetItemsData = getItemsFetchThunk(
  'fetchGetItems',
  GET_TASKS_API_URL
);

const handleFullfilled = (stateKey) => (state, action) => {
  // Add user to the state array
  state[stateKey] = action.payload;
};

const handleRejected = (state, action) => {
  //   console.log(action.payload);
  state.isError = true;
};

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    getItemsData: null,
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchGetItemsData.fulfilled, handleFullfilled('getItemsData'))
      .addCase(fetchGetItemsData.rejected, handleRejected);
  },
});

export default apiSlice.reducer;
