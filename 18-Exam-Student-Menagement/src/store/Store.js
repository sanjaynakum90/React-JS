import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "../Features/student/studentSlice";

const Store = configureStore({
    reducer: {
        student: studentSlice
    }
});

export default Store;