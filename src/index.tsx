import React from "react";
import { Tag } from 'antd';

const SayHello = ({ name }: { name: string }): JSX.Element => (
  <>
    <div>Hey {name}, say hello to TypeScripts</div>
    <Tag color="blue">101</Tag>
  </>
  
);

export default SayHello;