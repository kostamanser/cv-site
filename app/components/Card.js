import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, summary, bullets, visible }) => {
  return (
    <div className={`${visible ? styles.card : styles.invisiCard} global-card`}> {/* Conditional class based on visible prop */}
      <div className={styles.content}>
        <h3>{title}</h3>
        {Array.isArray(summary) ? (
        summary.map((line, index) => (
          <p key={index}>{line}</p>
        ))
      ) : (
        <p>{summary}</p>
      )}
        <ul className={styles.bullets}>
          {bullets.map((bullet, index) => (
            <li key={index} className={styles.bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      {/* <button className={styles.button}></button> */}
      <button className={visible ? styles.button : ''}></button>
    </div>
  );
};

export default Card;
