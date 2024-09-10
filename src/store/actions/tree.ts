import axios from "axios";
import { TreeProps, Properties } from "../../types/types";

export function loadingStart() {
    return {
        type: 'loading_start'
    }
}

export function dataFetchSuccess(data: TreeProps) {
    return {
        type: "data_fetch_success", data
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
        type: "fetch_item", data
    }
}

export function fetchSelectedName(data: string) {
    return {
        type: "fetch_selected_name", data
    }
}

export function fetchSelectedProperties(data: Properties[]) {
    return {
        type: "fetch_selected_properties", data
    }
}