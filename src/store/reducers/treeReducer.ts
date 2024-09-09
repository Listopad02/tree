import { Action } from "../../types/types";

const initialState = {
    loading: false,
    treeData: []
}

export default function treeReducer (state = initialState, action: Action) {
    switch (action.type) {
        case 'loading_start': 
            return {
                ...state,
                loading: true
            }
        case 'data_fetch_success':
            return {
                ...state,
                loading: false,
                treeData: action.data
            }
        default:
            return state
    }
}