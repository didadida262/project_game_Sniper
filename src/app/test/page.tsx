'use client';
import { useEffect, useState } from 'react';

export default function TestPage() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((val) => {
        const newVal = val + 1;
        console.log('newVal', newVal);
        return newVal;
      });
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>当前数值： {count}</div>;
}
