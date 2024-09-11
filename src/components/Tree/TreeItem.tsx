import { useAppSelector } from "../../store/hooks"
import { TreeItemProps } from "../../types/types"
import { FC } from "react"
import { RightOutlined, DownOutlined } from '@ant-design/icons';

export const TreeItem: FC<TreeItemProps> = ({ text, id, hasChildren, isVisible }) => {
    const { activeId } = useAppSelector((state) => state.tree)
    const styles = ["tree-item"]

    if (activeId === id) {
        styles.push("active")
    }

    return (
        <div>
            {hasChildren && (isVisible ? <DownOutlined /> : <RightOutlined />)}
            <p className={styles.join(" ")}>{text}</p>
        </div>
    )
}
