import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: null,
    user: null,
    error: false,
  },
  reducers: {
    getUser: (state) => {
      state.loading = true;
    },
    setUser: (state, { payload }) => {
      state.user = payload.userInfo;
      state.loading = false;
    },
    getUserError: (state) => {
      state.error = true;
      state.loading = true;
    },
    setTestUser: (state) => {
      state.user = {
        uid: "testUser",
        photoURL: "https://www.practicepte.com/images/clients/avatar_man.jpg",
        displayName: "Test User",
      };
      state.loading = false;
    },
    resetUser: (state) => {
      state.user = null;
      state.error = null;
      state.loading = null;
    },
  },
});

const selectUserState = (state) => state.user;
const selectUser = (state) => selectUserState(state).user;
export { selectUserState, selectUser };
export const {
  getUser,
  setUser,
  getUserError,
  setTestUser,
  resetUser,
} = userSlice.actions;
export default userSlice.reducer;
