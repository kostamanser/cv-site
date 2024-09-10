'use client';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
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

  const exampleCards = [
    {
      title: 'Hi!',
      summary: ['If you\'ve got 5 minutes to spare, below is my version of a CV and cover letter. It briefly covers my skils and mindsets and touches on me as a person.',
        'In a nutshell, I am looking for a role where I can use my top-notch problem-solving, project management and data analysis skills.',
        <span key="bold-text"> If you need someone like that, <strong>read on!</strong></span>
      ],
      bullets: [],
      visible: false
    },
    {
        title: 'Education',
        summary: 'A brief overview of my academic background.',
        bullets: ['PhD in Biology - University of Bristol', 'MSci in Biology (First Class)'],
        visible: true
    },
    {
      title: 'Soft Skills',
      summary: 'Summary',
      bullets: ['Teamwork', 'Skill 2', 'Skill 3'],
      visible: true
    },
    {
      title: 'Technical Skills',
      summary: 'Key competencies and technical skills.',
      bullets: ['Data Analysis (Python, R)', 'Project management', 'Research'],
      visible: true
    },
  ];



  const [imageMoved, setImageMoved] = useState(false); // To track when the image is in place
  const [cardsVisible, setCardsVisible] = useState(false); // To trigger card fade-in


  useEffect(() => {
    // After the image moves, trigger card fade-ins
    const timer = setTimeout(() => {
      setImageMoved(true);
      // Show cards after a short delay
      setTimeout(() => {
        
        console.log('Setting cardsVisible to true');
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
        {exampleCards.map((card, index) => (
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
            />
          </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
