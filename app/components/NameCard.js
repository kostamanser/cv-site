import React from 'react';
import styles from './NameCard.module.css'; // You can add this to your components folder

const NameCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img 
          src="/assets/profile-image.jpeg" 
          alt="Profile" 
          className={styles.profileImage} 
        />
      </div>
      <h1 className={styles.name}>Kosta Manser</h1>
    </div>
  );
};

export default NameCard;
