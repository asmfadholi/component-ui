import React from "react";
import { Tag } from 'antd';

export interface SayHelloProps {
    name: string;
}

export const SayHello = ({ name }: SayHelloProps): JSX.Element => (
  <>
    <div>Hey {name}, say hello to TypeScripts</div>
    <Tag color="blue">101</Tag>
  </>
  
);