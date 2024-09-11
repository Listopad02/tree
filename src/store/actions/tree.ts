import axios from "axios";
import { TreeProps, Properties, Node } from "../../types/types";
import { LOADING_START, 
         DATA_FETCH_SUCCESS, 
         FETCH_ITEM,
         FETCH_SELECTED_NAME,
         FETCH_SELECTED_PROPERTIES,
         SET_MODYFIED_DATA,
         CLEAR_STATE 
} from "../reducers/rootReducer";

export function loadingStart() {
    return {
        type: LOADING_START
    }
}

export function dataFetchSuccess(data: TreeProps) {
    return {
        type: DATA_FETCH_SUCCESS, data
    }
}

export async function fetchTreeData(dispatch: any, url = '../data.json') {
    dispatch(loadingStart())

    const response = await axios.get(url)
    const data = response.data

    dispatch(dataFetchSuccess(data))
}

export function fetchItem(data: string) {
    return {
        type: FETCH_ITEM, data
    }
}

export function fetchSelectedName(data: string) {
    return {
        type: FETCH_SELECTED_NAME, data
    }
}

export function fetchSelectedProperties(data: Properties[]) {
    return {
        type: FETCH_SELECTED_PROPERTIES, data
    }
}

export function fetchEditData(
    itemProperties: Properties[],
    value: string | undefined,
    id: string | undefined,
    treeData: Node[],
    activeId: string
) {
    const element = itemProperties.map(item => 
        item.id === id ? { ...item, selected: value } : item
    )
    let data = treeData

    const modify = (data: any) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === activeId) data[i].properties = element

            if (data[i].children) {
                modify(data[i].children)
            }
        }
    }

    modify(data)

    return {
        type: SET_MODYFIED_DATA, data
    }
}

export function clearState() {
    return {
        type: CLEAR_STATE,
    }
}