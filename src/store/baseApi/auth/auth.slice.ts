import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserType =
  | "USER"
  | "PREMIUM"
  | "COACH"
  | "ADMIN"
  | "SUPERADMIN"
  | "MODERATOR"
  | "SUPPORT"
  | "";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string | null;
  role: UserType;
  permissions: string[];
  isPremium: boolean;
  premiumUntil: string | null;
  emailVerified: boolean;
  createdAt: string;
}
interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
  },
});

export const { setAccessToken, setUser, setRefreshToken, logout } =
  authSlice.actions;

export default authSlice.reducer;
