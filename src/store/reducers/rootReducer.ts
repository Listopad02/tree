import { combineReducers } from "redux";
import treeReducer from "./treeReducer";

export const LOADING_START = 'loading_start'
export const DATA_FETCH_SUCCESS = 'data_fetch_success'
export const FETCH_ITEM = 'fetch_item'
export const FETCH_SELECTED_NAME = 'fetch_selected_name'
export const FETCH_SELECTED_PROPERTIES = 'fetch_selected_properties'
export const SET_MODYFIED_DATA = 'set_modified_data'
export const CLEAR_STATE = 'clear_state'

export default combineReducers({
    tree: treeReducer,
})