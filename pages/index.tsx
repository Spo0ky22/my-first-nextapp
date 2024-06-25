import Home from '@/components/Home';
import React, { memo } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const HomePage: React.FC<IProps> = () => {
  return <div><Home /></div>;
};

export default memo(HomePage);
