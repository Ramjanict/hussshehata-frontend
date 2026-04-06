import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProgramState {
  programId: string | null;
  dayId: string | null;
  weekNumber: number | null;
}

const initialState: ProgramState = {
  programId: null,
  dayId: null,
  weekNumber: null,
};

const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
    setProgramId: (state, action: PayloadAction<string>) => {
      state.programId = action.payload;
    },
    setDayId: (state, action: PayloadAction<string>) => {
      state.dayId = action.payload;
    },
    setWeekNumber: (state, action: PayloadAction<number>) => {
      state.weekNumber = action.payload;
    },
  },
});

export const { setProgramId, setDayId, setWeekNumber } = programSlice.actions;

export default programSlice.reducer;
