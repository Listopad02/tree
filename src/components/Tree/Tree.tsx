import { FC, useState } from 'react'
import { TreeProps, TreeNodeProps } from '../../types/types';
import { RightOutlined, DownOutlined } from '@ant-design/icons';

const TreeNode: FC<TreeNodeProps> = ({ node }) => {
    const [isVisible, setIsVisible] = useState(false)
    const hasChildren = !!node.children

    return (
        <ul>
            <li>
                <div>
                    {hasChildren && (isVisible ? <DownOutlined /> : <RightOutlined />)}
                    <p>{node.name}</p>
                </div>
            </li>
        </ul>
    )
}

export const Tree: FC<TreeProps> = ({ data }) => {
    return (
        <>
            {data.map((node) => (
                <TreeNode key={node.id} node={node} />
            ))}
        </>
    )
}