import { Action } from "../../types/types";

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
        case 'fetch_item': 
            return {
                ...state,
                activeId: action.data
            }
        case 'fetch_selected_name':
            return {
                ...state,
                name: action.data
            }
        case 'fetch_selected_properties':
            return {
                ...state,
                itemProperties: action.data
            }
        case 'set_modified_data':
            return {
                ...state,
                treeModifiedData: action.data
            }
        default:
            return state
    }
}