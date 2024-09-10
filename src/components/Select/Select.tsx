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
            value={selectedValue} 
            options={options.options.options.map((item: string) => ({ value: item, label: item }))}
        />
    )
}