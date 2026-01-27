import { createSlice } from "@reduxjs/toolkit";
import { fetchStudents, addStudentAsync, updateStudentAsync, deleteStudentAsync } from "./studentThunk";

const studentSlice = createSlice({
    name: "student",
    initialState: {
        students: [],
        loading: false,
        error: null
    },
    reducers: {
        addStudent: (state, action) => {
            state.students.push(action.payload);
        },
        updateStudent: (state, action) => {
            const index = state.students.findIndex(s => s.id === action.payload.id);
            if (index !== -1) {
                state.students[index] = action.payload;
            }
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter(s => s.id !== action.payload);
        }
    },
   
});

export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;