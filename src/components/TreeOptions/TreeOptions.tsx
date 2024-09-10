import { Tabs, Select } from "antd"
import type { TabsProps } from 'antd';
import { useAppSelector } from "../../store/hooks";
import { Properties } from "../../types/types";
import { useState } from "react";
import { SelectComponent } from "../Select/Select";
import styled from "styled-components";

const Container = styled.div`
    padding: 10px 0 0 10px;
    display: flex;
    flex-direction: column;
`
const Text = styled.p`
    margin: 0;
    font-size: 16px;
`
const StyledSelect = styled(Select)`
    width: 100%;
    max-width: 300px;
`

export const TreeOptions = () => {
    const { itemProperties }: { itemProperties: Properties[] | [] } = useAppSelector(state => state.tree)
    const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined)

    const items: TabsProps['items'] = itemProperties.map((item, i) => ({
        key: item.id,
        label: item.tabname,
        children: item.editable !== true ?
            <Container>
                {item.options.map((option, i) => <Text key={i}>{option}</Text>)}
            </Container> :
            <Container>
                <StyledSelect 
                    options={item.options.map(option => ({ value: option, label: option }))} 
                    value={selectedValue || item.selected} 
                    onChange={(value) => {
                        setSelectedValue(value as string)
                    }}
                />
                {/* <SelectComponent options={item.options.map(option => ({ value: option, label: option }))} /> */}
            </Container>
    }))

    return <Tabs items={items} />
}