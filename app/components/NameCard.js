import React from 'react';
import styles from './NameCard.module.css'; 

const NameCard = () => {
  return (
    <div className={styles.nameCard}>
      <h1 className={styles.name}>Kosta Manser</h1>
    </div>
  );
};

export default NameCard;
