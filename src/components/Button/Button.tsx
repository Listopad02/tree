import { Button } from "antd";
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { ButtonProps } from "../../types/types";
import { FC, useRef, cloneElement } from "react";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
    width: 100%;
    max-width: 200px;
`

export const ButtonComponent: FC<ButtonProps> = ({ text, type, action, onClick, children }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
        if (onClick) {
            onClick();
        }
    };

    return (
        <ButtonStyled 
            type={type} 
            icon={ action === 'download' ? <DownloadOutlined /> : <UploadOutlined />}
            onClick={handleClick}
        >
            { text }
            {children && cloneElement(children as React.ReactElement<any>, { ref: inputRef })}
        </ButtonStyled>
    )
}