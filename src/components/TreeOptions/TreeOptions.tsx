import { Tabs } from "antd"
import type { TabsProps } from 'antd';
import { useAppSelector } from "../../store/hooks";
import { Properties } from "../../types/types";
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
    const items: TabsProps['items'] = itemProperties.map(item => ({
        key: item.id,
        label: item.tabname,
        children: <Container>{item.options.map(option => <Text>{option}</Text>)}</Container>
    }))

    return <Tabs defaultActiveKey="0" items={items} />
}