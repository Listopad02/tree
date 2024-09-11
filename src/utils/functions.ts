import { Node } from "../types/types";

export function downloadFile(fileContent: Node[]) {
    let a = document.createElement("a")
    let file = new Blob([JSON.stringify(fileContent)], {
        type: "application/json"
    })
    a.href = URL.createObjectURL(file)
    a.download = "file.json"
    a.click()
}

export function uploadFile() {
    
}