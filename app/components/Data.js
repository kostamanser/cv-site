// Data.js
const cardData = [
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
        bullets: [
          { text: 'PhD in Biology - University of Bristol', moreInfo: 'Worked on various research projects related to biology.' },
          { text: 'MSci in Biology', moreInfo: 'First class degree. Awarded prize for best final year project after receiving the highest mark that year for my Master\'s thesis' },
        ],
        visible: true
    },
    {
      title: 'Technical skills',
      summary: 'Hard skills',
      bullets: [
        { text: 'Coding', moreInfo: 'Languages and examples' },
        { text: 'Project management', moreInfo: 'Project e.g. costa rica' },
        { text: 'Third as a test', moreInfo: 'test'}
      ],
        visible: true
    },
    {
        title: 'Soft skills',
        summary: 'Soft skills',
        bullets: [
          { text: 'Teamwork', moreInfo: 'Examples.' },
          { text: 'Grit', moreInfo: 'examples' },
        ],
        visible: true
      }
      
  ];

  export default cardData; 
