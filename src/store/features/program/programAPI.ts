import { baseAPI } from "@/store/baseApi/baseApi";
import type { ActivityTrackingResponse } from "./types/activity";
import type { ProgramAnalyticsResponse, ProgramParams } from "./types/analytic";
import type {
  BasicInfo,
  BasicInfoResponse,
  ExerciseSets,
  OrderedIdsPayload,
  ProgramSchedule,
} from "./types/basicInfo";
import type { MethodPayload, TrainingMethodsResponse } from "./types/method";
import type { ProgramApiResponse, ProgramsParams } from "./types/program";
import type {
  GetUsersParams,
  ProgramReviewResponse,
  userManagementResponse,
} from "./types/review";

export const programAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    basicInfo: build.mutation<BasicInfoResponse, BasicInfo>({
      query: (data) => ({
        url: `/admin/programs`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["programs"],
    }),
    updateBasicInfo: build.mutation<
      BasicInfoResponse,
      { data: Partial<BasicInfo>; program_id: string }
    >({
      query: ({ data, program_id }) => ({
        url: `/admin/programs/${program_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["programs"],
    }),

    daySplit: build.mutation<
      any,
      { program_id: string; data: ProgramSchedule }
    >({
      query: ({ program_id, data }) => ({
        url: `/admin/programs/${program_id}/day-split`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["programs"],
    }),
    addExercises: build.mutation<
      any,
      { programId: string; dayId: string; data: FormData }
    >({
      query: ({ programId, dayId, data }) => ({
        url: `/admin/programs/${programId}/days/${dayId}/exercises`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["programs"],
    }),
    deleteExercises: build.mutation<
      any,
      { programId: string; dayId: string; exceriseId: string }
    >({
      query: ({ programId, dayId, exceriseId }) => ({
        url: `/admin/programs/${programId}/days/${dayId}/exercises/${exceriseId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["programs"],
    }),
    updateExercises: build.mutation<
      any,
      {
        programId: string;
        dayId: string;
        exceriseId: string;
        data: ExerciseSets;
      }
    >({
      query: ({ programId, dayId, exceriseId, data }) => ({
        url: `/admin/programs/${programId}/days/${dayId}/exercises/${exceriseId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["programs"],
    }),
    orderExercises: build.mutation<
      any,
      {
        programId: string;
        dayId: string;

        data: OrderedIdsPayload;
      }
    >({
      query: ({ programId, dayId, data }) => ({
        url: `/admin/programs/${programId}/days/${dayId}/exercises/reorder`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["programs"],
    }),

    getAllProgram: build.query<ProgramApiResponse, ProgramsParams>({
      query: (params) => ({
        url: `/admin/programs`,
        method: "GET",
        params,
      }),
      providesTags: ["programs"],
    }),
    getSingleAllProgram: build.query<ProgramApiResponse, string>({
      query: (id) => ({
        url: `/admin/programs/${id}`,
        method: "GET",
      }),
      providesTags: ["programs"],
    }),
    deleteProgram: build.mutation<void, string>({
      query: (id) => ({
        url: `/admin/programs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["programs"],
    }),

    getReview: build.query<ProgramReviewResponse, string>({
      query: (id) => ({
        url: `/admin/programs/${id}/review`,
        method: "GET",
      }),
      providesTags: ["programs"],
    }),
    programPublish: build.mutation<
      any,
      { id: string; data: { publish: boolean } }
    >({
      query: ({ data, id }) => ({
        url: `/admin/programs/${id}/publish`,
        method: "PATCH",
        body: data,
      }),
    }),
    postMethod: build.mutation<any, MethodPayload>({
      query: (data) => ({
        url: `/admin/training-methods`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["method"],
    }),
    getMethod: build.query<TrainingMethodsResponse, void>({
      query: () => ({
        url: `/admin/training-methods`,
        method: "GET",
      }),
      providesTags: ["method"],
    }),
    deleteMethod: build.mutation<any, string>({
      query: (id) => ({
        url: `/admin/training-methods/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["method"],
    }),
    updateMethod: build.mutation<
      any,
      { id: string; data: Partial<MethodPayload> }
    >({
      query: ({ data, id }) => ({
        url: `/admin/training-methods/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["method"],
    }),
    getUserManagement: build.query<userManagementResponse, GetUsersParams>({
      query: (params) => ({
        url: `/content-management/user`,
        method: "GET",
        params,
      }),
    }),
    getUserActivity: build.query<ActivityTrackingResponse, void>({
      query: () => ({
        url: `/content-management/user/activity-tracking`,
        method: "GET",
      }),
    }),
    //program analytics
    getProgramAnalytics: build.query<ProgramAnalyticsResponse, ProgramParams>({
      query: (params) => ({
        url: `/admin/programs/analytics/performance`,
        method: "GET",
        params,
      }),
    }),
  }),
});

export const {
  useBasicInfoMutation,
  useUpdateBasicInfoMutation,
  useDaySplitMutation,
  useAddExercisesMutation,
  useDeleteExercisesMutation,
  useUpdateExercisesMutation,
  useOrderExercisesMutation,
  useGetAllProgramQuery,
  useGetReviewQuery,
  useDeleteProgramMutation,
  useGetSingleAllProgramQuery,
  useProgramPublishMutation,
  //method
  usePostMethodMutation,
  useGetMethodQuery,
  useDeleteMethodMutation,
  useUpdateMethodMutation,
  // user management
  useGetUserManagementQuery,
  useGetUserActivityQuery,
  //program analytics
  useGetProgramAnalyticsQuery,
} = programAPI;
