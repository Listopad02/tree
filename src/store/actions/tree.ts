import axios from "axios";
import { TreeProps, Properties, Node } from "../../types/types";

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
        type: "set_modified_data", data
    }
}

export function clearState() {
    return {
        type: "clear_state",
    }
}