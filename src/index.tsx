import React from "react";
import { Tag } from 'antd';

const SayHello = ({ name }: { name: string }): JSX.Element => (
  <>
    <div>Hey {name}, say hello to TypeScript </div>
    <Tag color="blue">101 benang</Tag>
  </>
  
);

export default SayHello;