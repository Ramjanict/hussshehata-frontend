import { baseAPI } from "@/store/baseApi/baseApi";

export const userAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, { email: string; password: string }>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    refresh: build.mutation<any, { refreshToken: string }>({
      query: (data) => ({
        url: "/auth/refresh",
        method: "POST",
        body: data,
      }),
    }),

    getMe: build.query<any, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLazyGetMeQuery,
  useGetMeQuery,
  useRefreshMutation,
} = userAPI;
