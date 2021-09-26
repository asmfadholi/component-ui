import { Button } from 'antd';

export interface ButtonMagicProps {
    name: string;
    type: "primary" | "default" | "ghost" | "text" | "link" | "dashed";
}

export const ButtonMagic = ({ name, type }: ButtonMagicProps): JSX.Element => <Button type={type}>{name}</Button>;