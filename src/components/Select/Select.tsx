import { Select } from "antd"
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Properties } from "../../types/types";
import { fetchEditData } from "../../store/actions/tree";
import styled from "styled-components";

const StyledSelect = styled(Select)`
    width: 100%;
    max-width: 300px;
`

export const SelectComponent = (options: any) => {
    const dispatch = useAppDispatch()
    const [selectValue, setSelectValue] = useState<string | undefined>(undefined)
    const [selectId, setSelectId] = useState<string>()
    const { itemProperties }: { itemProperties: Properties[] | [] } = useAppSelector(state => state.tree)
    const { treeData } = useAppSelector(state => state.tree)
    const { activeId } = useAppSelector(state => state.tree)

    const handleSelectChange = (value: string, id: string) => {
        setSelectValue(value as string)
        setSelectId(id)
    }

    useEffect(() => {
        dispatch(fetchEditData(
            itemProperties, selectValue, selectId, treeData, activeId
        ))
    }, [activeId, dispatch, itemProperties, selectId, selectValue, treeData])
    
    return (
        <StyledSelect  
            defaultValue={options.options.selected}
            value={selectValue}
            options={options.options.options.map((item: string) => ({ value: item, label: item }))}
            onChange={(value) => handleSelectChange(value as string, options.options.id)}
        />
    )
}