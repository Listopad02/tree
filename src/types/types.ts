export interface LayoutProps {
    children: React.ReactNode
}

export type Properties = {
    id: string
    tabname: string
    editable: boolean
    selected?: string
    options: string[]
}

export type Node = {
    id: string
    name: string
    children?: Node[],
    properties?: Properties[]
}

export interface TreeProps {
    data: Node[]
}

export interface TreeNodeProps {
    node: Node
}

export type Action = {
    type: string
    data?: TreeProps | Properties[] | string | Node[]
}

export interface SelectProps {
    options: any
    selectedValue: string
}