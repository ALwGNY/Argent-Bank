import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  error: '',
  token : null,
  isModalOpen: false,
  userName: '',
  firstName: '',
  lastName:'',
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = '';
    },
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.email = '';
      state.password = '';
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    setUserInfo: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName
      state.userName = action.payload.userName
    }
  },
});

export const {
   setEmail,
   setPassword,
   setError,
   clearError,
   setToken,
   logout, 
   openModal,
   closeModal,
   setUserInfo,
 } = userSlice.actions;
export default userSlice.reducer;


export const selectToken = (state) => state.user.token; 
export const selectUserName = (state) => state.user.userName;
export const selectFirstName = (state) => state.user.firstName;
export const selectLastName = (state) => state.user.lastName;
export const selectEmail = (state) => state.user.email;
export const selectPassword = (state) => state.user.password;
export const selectError = (state) => state.user.error;