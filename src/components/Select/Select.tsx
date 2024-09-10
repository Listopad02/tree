import { Select } from "antd"
import { useState } from "react";
import styled from "styled-components";

const StyledSelect = styled(Select)`
    width: 100%;
    max-width: 300px;
`

export const SelectComponent = (options: any) => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined)

    return (
        <StyledSelect 
            options={options.options} 
            value={selectedValue} 
            onChange={(value) => {
                setSelectedValue(value as string)
            }}
        />
    )
}