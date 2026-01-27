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
    extraReducers: (builder) => {
        builder
            // Fetch Students
            .addCase(fetchStudents.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.loading = false;
                state.students = action.payload;
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Add Student
            .addCase(addStudentAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addStudentAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.students.push(action.payload);
            })
            .addCase(addStudentAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Update Student
            .addCase(updateStudentAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateStudentAsync.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.students.findIndex(s => s.id === action.payload.id);
                if (index !== -1) {
                    state.students[index] = action.payload;
                }
            })
            .addCase(updateStudentAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Delete Student
            .addCase(deleteStudentAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteStudentAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.students = state.students.filter(s => s.id !== action.payload);
            })
            .addCase(deleteStudentAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;