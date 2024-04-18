import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    value: [], 
  },
  reducers: {
    setTasks: (state, action) => {
      state.value = action.payload;
    },
    updateTask: (state, action) => {
      const updatedIndex = state.value.findIndex(task => task.id === action.payload.id);
      state.value[updatedIndex] = action.payload;
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter(task => task.id !== action.payload);
    },
  },
});

export const { setTasks, updateTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;