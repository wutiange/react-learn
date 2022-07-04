import { useState } from 'react';

const BaseUsage = () => {
  const [count, setCount] = useState(0);
  const onClickCount = () => {
    setCount(count + 1);
  };

  return <h1 onClick={onClickCount}>当前的数字为：{count}</h1>;
};

export default BaseUsage;
