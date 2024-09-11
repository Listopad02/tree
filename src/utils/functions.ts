import { Node, TreeProps } from "../types/types";
import { dataFetchSuccess, clearState } from "../store/actions/tree";

export function downloadFile(fileContent: Node[]) {
    let a = document.createElement("a")
    let file = new Blob([JSON.stringify(fileContent)], {
        type: "application/json"
    })
    a.href = URL.createObjectURL(file)
    a.download = "file.json"
    a.click()
}

export function uploadFile(e: any, dispatch: any) {
    if (!e.target.files || e.target.files.length === 0) return

    const fr = new FileReader()
    fr.readAsText(e.target.files[0]!, "UTF-8")
    fr.onload = (e: any) => {
        const data: TreeProps = JSON.parse(e.target.result)

        dispatch(dataFetchSuccess(data))
        dispatch(clearState())
    }
}