import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Card.module.css';

const Card = ({ title, summary, bullets, visible }) => {
  // State to manage visibility for individual bullets
  const [visibleBullets, setVisibleBullets] = useState(
    new Array(bullets.length).fill(false) // Initialize all bullets as collapsed
  );

  // State to manage whether all bullets are expanded or not
  const [expandAll, setExpandAll] = useState(false);

  // Toggle individual bullet info
  const handleBulletToggle = (index) => {
    const newVisibleBullets = [...visibleBullets];
    newVisibleBullets[index] = !newVisibleBullets[index]; // Toggle specific bullet's visibility
    setVisibleBullets(newVisibleBullets);
  };

  // Toggle "expand all" to either expand or collapse all bullets
  const handleExpandAll = () => {
    setExpandAll(!expandAll); // Toggle expand all state
    setVisibleBullets(new Array(bullets.length).fill(!expandAll)); // Set all bullets to expanded/collapsed
  };

  return (
    <div className={`${visible ? styles.card : styles.invisiCard} global-card`}>
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
            <li key={index} className={styles.bulletItem}>
              <span onClick={() => handleBulletToggle(index)} 
               className={`${styles.bullet} ${visibleBullets[index] ? styles.rotatedBullet : ''}`}>
                {bullet.text}
              </span>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={visibleBullets[index] ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className={styles.extraInfo}
              >
                {bullet.moreInfo}
              </motion.div>
            </li>
          ))}
        </ul>
      </div>

      {bullets.length > 0 && (
        <button
          className={expandAll ? styles.lessButton : styles.moreButton}
          onClick={handleExpandAll}
          
        >
          <span className={styles.buttonText}>{expandAll ? 'Collapse all' : 'Expand all'}</span>
          {/* Optionally, add text or just rely on the image in the button */}
        </button>
      )}
    </div>
  );
};

export default Card;
