import { Button } from "antd";
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { ButtonProps } from "../../types/types";
import { FC } from "react";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
    width: 100%;
    max-width: 200px;
`

export const ButtonComponent: FC<ButtonProps> = ({ text, type, action, onClick }) => {
    return (
        <ButtonStyled 
            type={type} 
            icon={ action === 'download' ? <DownloadOutlined /> : <UploadOutlined />}
            onClick={onClick}
        >
            { text }
        </ButtonStyled>
    )
}