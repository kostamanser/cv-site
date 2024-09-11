'use client';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import cardData from '../components/Data';
import NameCard from '../components/NameCard';
import styles from './HomePage.module.css';
import Image from 'next/image';
import { motion } from "framer-motion";

const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.4, // Stagger animation delay
        duration: 1.2,
      },
    }),
    hidden: { opacity: 0 },
  };

export default function HomePage() {
  const addressee = 'there'; // CHANGE NAME OF ADDRESSEE

  const [imageMoved, setImageMoved] = useState(false); // To track when the image is in place
  const [cardsVisible, setCardsVisible] = useState(false); // To trigger card fade-in

  const [isVisible, setIsVisible] = useState(false); // Track visibility for "More Information" button
  const [isRotated, setIsRotated] = useState(false); // Track rotation of bullets

    // Toggle more information and bullet rotation
    const handleToggle = () => {
      setIsVisible(!isVisible);
      setIsRotated(!isRotated);
    };

  useEffect(() => {
    // After the image moves, trigger card fade-ins
    const timer = setTimeout(() => {
      setImageMoved(true);
      // Show cards after a short delay
      setTimeout(() => {        
        setCardsVisible(true);
      }, 2200); // Adjust this timing as needed
    }, 1000); // Adjust time to match the desired duration for the profile image movement

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.introSection} ${imageMoved ? styles.moveUp : ''}`}>
      <div className={styles.profileImageWrapper}>
  <Image 
    src="/assets/profile-image.jpeg" 
    alt="Profile" 
    width={150} 
    height={150}
  />
</div>
      <h1 className={styles.greeting}>Hi, {addressee}, I&apos;m Kosta</h1>
      </div>
      
      <div className={`${styles.cardsSection} ${cardsVisible ? styles.cardsVisible : ''}`}>
        <NameCard />
        {/* New Wrapper for the Cards */}
        <div className={styles.cardsWrapper}>
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={cardsVisible ? "visible" : "hidden"}
            variants={variants}
            custom={index}
          >
            <Card
              title={card.title}
              summary={card.summary}
              bullets={card.bullets}
              visible={card.visible} // Pass the visible property here
              isRotated={isRotated} // Pass the rotation state
              isVisible={isVisible} // Pass the visibility state for more info
              handleToggle={handleToggle} // Pass the toggle function
            />
          </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
