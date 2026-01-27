import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/students";

export const fetchStudents = createAsyncThunk(
    "student/fetchStudents",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const addStudentAsync = createAsyncThunk(
    "student/addStudent",
    async (studentData, { rejectWithValue }) => {
        try {
            const response = await axios.post(API_URL, studentData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const updateStudentAsync = createAsyncThunk(
    "student/updateStudent",
    async (studentData, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${API_URL}/${studentData.id}`, studentData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const deleteStudentAsync = createAsyncThunk(
    "student/deleteStudent",
    async (id, { rejectWithValue }) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);