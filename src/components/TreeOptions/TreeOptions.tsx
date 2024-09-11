import { Tabs } from "antd"
import type { TabsProps } from 'antd';
import { useAppSelector } from "../../store/hooks";
import { Properties } from "../../types/types";
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

export const TreeOptions = () => {
    const { itemProperties }: { itemProperties: Properties[] | [] } = useAppSelector(state => state.tree)

    const items: TabsProps['items'] = itemProperties.map((item, i) => ({
        key: item.id,
        label: item.tabname,
        children: item.editable !== true ?
            <Container>
                {item.options.map((option) => <Text key={item.id}>{option}</Text>)}
            </Container> :
            <Container>
                <SelectComponent 
                    options={item}
                    key={item.id}
                />
            </Container>
    }))

    return <Tabs items={items} />
}