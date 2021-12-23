import { combineReducers } from "redux";
import gameOanTuTiReducer from "./gameOanTuTiReducer";

// store tổng ứng dụng
export const rootReducer = combineReducers({
    // Nơi chứa các reducer cho nghiệp vụ (store con)
    gameOanTuTiReducer,
})