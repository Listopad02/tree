import { FC, useState } from 'react'
import { TreeProps, TreeNodeProps } from '../../types/types';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { fetchItem, fetchSelectedName, fetchSelectedProperties } from '../../store/actions/tree';
import { useAppDispatch } from '../../store/hooks';
import "./Tree.scss"

const TreeNode: FC<TreeNodeProps> = ({ node }) => {
    const [isVisible, setIsVisible] = useState(false)
    const hasChildren = !!node.children
    const dispatch = useAppDispatch()

    const handleClick = () => {
        setIsVisible(!isVisible)

        if (!hasChildren) {
            dispatch(fetchItem(node.id))
            dispatch(fetchSelectedName(node.name))
            dispatch(fetchSelectedProperties(node.properties!))
        }
    }

    return (
        <ul className='tree-parent'>
            <li onClick={handleClick}>
                <div>
                    {hasChildren && (isVisible ? <DownOutlined /> : <RightOutlined />)}
                    <p>{node.name}</p>
                </div>
            </li>
            <ul className='tree-child'>
                {(hasChildren && isVisible) && <Tree data={node.children!} />}
            </ul>
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