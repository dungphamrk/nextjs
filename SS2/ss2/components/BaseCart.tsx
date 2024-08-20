import React from 'react';
import styles from './BaseCart.module.scss';

interface BaseCartProps {
  content: string;
  title: string;
  image: string;
  children: React.ReactNode;
}

const BaseCart: React.FC<BaseCartProps> = ({ content, title, image, children }) => {
  return (
    <div className={styles.cart}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
        <div className={styles.actions}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseCart;
