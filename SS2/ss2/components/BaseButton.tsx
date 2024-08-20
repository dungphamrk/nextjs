import React from 'react';
import styles from './BaseButton.module.scss';

interface BaseButtonProps {
  children: React.ReactNode;
  type: 'primary' | 'secondary';
}

const BaseButton: React.FC<BaseButtonProps> = ({ children, type }) => {
  return (
    <button className={styles[type]}>
      {children}
    </button>
  );
};

export default BaseButton;
