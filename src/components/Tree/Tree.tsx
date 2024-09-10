import { FC, useState } from 'react'
import { TreeProps, TreeNodeProps } from '../../types/types';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { TreeWrapper } from './TreeWrapper';
import "./Tree.scss"

const TreeNode: FC<TreeNodeProps> = ({ node }) => {
    const [isVisible, setIsVisible] = useState(false)
    const hasChildren = !!node.children

    const handleClick = () => {
        setIsVisible(!isVisible)

        if (!hasChildren) {
            // dispatch sth...
        }
    }

    return (
        <ul className='list'>
            <li onClick={handleClick}>
                <div>
                    {hasChildren && (isVisible ? <DownOutlined /> : <RightOutlined />)}
                    <p>{node.name}</p>
                </div>
                <TreeWrapper id={node.id} />
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