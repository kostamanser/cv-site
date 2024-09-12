// Data.js
import styles from './Data.module.css'; // Import your CSS module
import Link from 'next/link';

{/* <Link href="/images/Set_up_full.png" target="_blank" className={styles.customLink}>here</Link>   CUSTOM LINK EXAMPLE    */}

const cardData = [
    {
        title: 'Hi!',
        summary: ['If you\'ve got 5 minutes to spare, below is my version of a CV and cover letter. It briefly covers my skils and mindsets and touches on me as a person.',
            'In a nutshell, I am looking for a role where I can use my top-notch problem-solving, project management and data analysis skills.',
            <span key="bold-text"> If you need someone like me, <strong>read on!</strong></span>
        ],
        bullets: [],
        visible: false
    },
    {
        title: <span STYLE="font-size:30px">Why me?</span>,
        summary: [<span key="bold-text"> I was recently awarded a PhD in electric ecology which may not seem relevant to your industry, but it imbued me with
            <strong> grit</strong>, a <strong>get-up-and-go attitude,</strong> and a <strong>rigorous</strong> and <strong>methodical</strong> method for solving problems.</span>, <span>
            Not to mention a pantheon of useful <strong>technical skills</strong>.</span>,
        <span key="bold-text"><strong>You won't find better in anybody else.</strong></span>
        ],
        bullets: [],
        visible: false
    },

    {
        title: 'Skills',
        summary: 'Here is a quick summary of the key skills I have picked up, technical and otherwise.',
        bullets: [
            {
                text: <span><strong>Data analysis (R, Matlab, Python) </strong></span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li>R: I use this for statistical tests and complex modelling including linear mixed models (LMMs, GLMs). It's also good for plotting using <code>ggplot2</code> (<Link href="/images/R_plot_example.png" target="_blank" className={styles.customLink}>see here</Link>). </li>
                        <li>MATLAB: I use this for large matrix analysis, bespoke signal analysis and to analyse some other odd datatypes that you only really find in MATLAB.</li>
                        <li>Python: I use this for anything the other two can't do. I have experience with <code>pandas</code> and <code>matplotlib</code> among others.</li>
                    </ul>
                )
            },
            {
                text: <span><strong>Software development (Python, Javascript, CSS, Matlab, HTML)</strong></span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li>Python: I am building an webapp for storing photos at the moment using a Flask backend coded in python. I also built a little electric signal recorder using a raspberry pi, an LED and some buttons which was controlled using a piece of python software i wrote. </li>
                        <li>MATLAB: I wrote a couple of little applications which would collect and plot data for some Master's students I was mentoring.</li>
                        <li>Javascript, CSS, HTML: Currently learning this to build things like this website!</li>
                    </ul>
                )
            },
            {
                text: <span><strong>Project management</strong></span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li></li>
                    </ul>
                )
            },
            {
                text: <span><strong>Leadership</strong></span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li></li>
                    </ul>
                )
            },
            {
                text: <span><strong>Research</strong></span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li>I established a new field of study, demonstrating I have a strong ability to integrate diverse, tangentially related information. </li>
                        <li>I am adept at interpreting data and trends and using those to inform my decisions.</li>
                        <li>I have done the research for several projects.</li>
                    </ul>
                )
            }
        ],
        visible: true
    },
    {
        title: 'Relevant mindsets',
        summary: 'Here are a few relevant mindsets I have learned over the course of my PhD and various side-hustles which I think are critical for success.',
        bullets: [
            {
                text: <span><strong>Anything can be learned.</strong> There are times when I didn't have the skills needed for a task. So I learned them.</span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li>This website is custom-built from scratch. It uses CSS, JavaScript, HTML and a handful of other technologies I learned to make this website. You can see the result youself.</li>
                        <li>Two months before the end of my PhD I realised that I needed much more complicated analysis for my data. So I used chatGPT to teach me how to do Linear Mixed Models and other complicated statistical techniques. This ended up being a tentpole of my PhD thesis.</li>
                        <li>I wanted to make a 3D model of my setup. I had no experience in 3D modelling, so I learned how to use a basic computer-aided design (CAD) program. You can see the result <Link href="/images/Set_up_full.png" target="_blank" className={styles.customLink}>here</Link>. </li>
                    </ul>
                )
            },
            {
                text: <span><strong>Don't fear failure.</strong> If you never fail, you're not trying hard enough. There have been times nothing has being going right for me, but I have learned that you can always pick yourself up and find the opportunities within a bad situation.</span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li>In my PhD I set out to discover a new sense (<a href="https://simple.wikipedia.org/wiki/Electroreception" target="_blank" rel="noopener noreferrer" className={styles.customLink}>electroreception</a>) in crustaceans. It took me three years of finding absolutely nothing across a whole host of species before I got my first positive result - that's when some people finish data collection. I finally made a discovery and I'm glad I stuck with it. </li>
                        <li>I had to cut many of my projects because of things out of my control. I often got negative results after months of planning, data collection and analysis. Despite the set-backs, every new iteration of my project was better and was built on what I learned from my previous failures.</li>
                    </ul>
                )
            },
            {
                text: <span><strong>Communication is key and deeper than you think.</strong> Communication is not just being able to explain a complex idea, it means managing your professional relationships and leveraging the people around you.</span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li>I am publishing an article with an American collaborator. The article is set to be a hit, but my collaborator is not a subject-matter expert as I am. It took a deft hand to persuade him to work harder and aim higher. The result: we are submitting to a top-tier journal rather than a mid-tier, even if it takes a little longer. </li>
                        <li>My relationship with my supervisor was falling apart. Before it could, I took proactive steps to make things right. We had a hard, honest conversation and realigned our expectations of one another. After that conversation, our relationship was much more productive than it had been before. </li>
                        <li>Communication is also explaining complex ideas in a digestible way! I have experience in presenting my work at scientific conferences, in lab meetings and even pre-school children who have come across my field equipment. </li>
                    </ul>
                )
            },
        ],
        visible: true
    },

    {
        title: 'Education',
        summary: 'A brief overview of my academic background.',
        bullets: [
            {
                text: 'PhD in Biology - University of Bristol', moreInfo: ['If you\'ve got 5 minutes to spare, below is my version of a CV and cover letter. It briefly covers my skils and mindsets and touches on me as a person.',
                    'In a nutshell, I am looking for a role where I can use my top-notch problem-solving, project management and data analysis skills.',
                    <span key="bold-text"> If you need someone like me, <strong>read on!</strong></span>
                ]
            },
            { text: 'MSci in Biology', moreInfo: 'First class degree. Awarded prize for best final year project after receiving the highest mark that year for my Master\'s thesis' },
        ],
        visible: true
    },
    {
        title: 'Education',
        summary: 'A brief overview of my academic background.',
        bullets: [
            {
                text: 'PhD in Biology - University of Bristol', moreInfo: ['If you\'ve got 5 minutes to spare, below is my version of a CV and cover letter. It briefly covers my skils and mindsets and touches on me as a person.',
                    'In a nutshell, I am looking for a role where I can use my top-notch problem-solving, project management and data analysis skills.',
                    <span key="bold-text"> If you need someone like me, <strong>read on!</strong></span>
                ]
            },
            { text: 'MSci in Biology', moreInfo: 'First class degree. Awarded prize for best final year project after receiving the highest mark that year for my Master\'s thesis' },
        ],
        visible: true
    }

];

export default cardData; 
