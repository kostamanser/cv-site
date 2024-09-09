import React from 'react';
import Card from '../components/Card';
import NameCard from '../components/NameCard';

export default function HomePage() {
  const exampleCards = [
    {
      title: 'Education',
      summary: 'A brief overview of my academic background.',
      bullets: ['PhD in Biology - University of Bristol', 'MSc in Marine Biology', 'BSc in Zoology'],
    },
    {
      title: 'Experience',
      summary: 'Professional experience in the field of biology.',
      bullets: ['Research Assistant at Marine Lab', 'Field Researcher for Conservation Group', 'Intern at Aquarium'],
    },
    {
      title: 'Skills',
      summary: 'Key competencies and technical skills.',
      bullets: ['Data Analysis (Python, R)', 'Electroreception Research', 'Scientific Writing'],
    },
  ];

  return (
    <div style={styles.container}>
        <NameCard />
      <h1>My CV</h1>
      {exampleCards.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          summary={card.summary} 
          bullets={card.bullets} 
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: '50px',
    maxWidth: '800px',
    margin: '0 auto',
  },
};
