import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, summary, bullets }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{summary}</p>
        <ul className={styles.bullets}>
          {bullets.map((bullet, index) => (
            <li key={index} className={styles.bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.button}></button>
    </div>
  );
};

export default Card;
