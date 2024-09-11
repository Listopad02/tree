import { Action } from "../../types/types";
import { LOADING_START, 
         DATA_FETCH_SUCCESS, 
         FETCH_ITEM,
         FETCH_SELECTED_NAME,
         FETCH_SELECTED_PROPERTIES,
         SET_MODYFIED_DATA,
         CLEAR_STATE
} from "./rootReducer";

const initialState = {
    loading: false,
    treeData: [],
    activeId: "",
    name: "",
    itemProperties: [],
    treeModifiedData: []
}

export default function treeReducer (state = initialState, action: Action) {
    switch (action.type) {
        case LOADING_START: 
            return {
                ...state,
                loading: true
            }
        case DATA_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                treeData: action.data
            }
        case FETCH_ITEM: 
            return {
                ...state,
                activeId: action.data
            }
        case FETCH_SELECTED_NAME:
            return {
                ...state,
                name: action.data
            }
        case FETCH_SELECTED_PROPERTIES:
            return {
                ...state,
                itemProperties: action.data
            }
        case SET_MODYFIED_DATA:
            return {
                ...state,
                treeModifiedData: action.data
            }
        case CLEAR_STATE:
            return {
                ...state,
                activeId: "",
                name: "",
                itemProperties: [],
                treeModifiedData: []
            }
        default:
            return state
    }
}