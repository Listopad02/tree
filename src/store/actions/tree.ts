import axios from "axios";
import { TreeProps } from "../../types/types";

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