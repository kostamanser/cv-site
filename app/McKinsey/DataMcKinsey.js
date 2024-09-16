// Data.js
/* eslint-disable react/no-unescaped-entities */
import styles from '../components/Data.module.css'; // Import your CSS module
import Link from 'next/link';

{/* <Link href="/images/Set_up_full.png" target="_blank" className={styles.customLink}>here</Link>   CUSTOM LINK EXAMPLE    */}

const cardData = [
    {
        title: 'Hi!',
        summary: ['Below is my version of a CV and cover letter. It briefly covers my skills and mindsets and touches on me as a person.',
            'I am looking for a role where I can use my top-notch problem-solving, project management and data analysis skills.',
            <span key="bold-text"> If you need someone like me, <strong>read on!</strong></span>
        ],
        bullets: [],
        visible: false
    },
    {
        title: <span style={{fontSize:'30px'}}>Why me?</span>,
        summary: [<span key="bold-text"> I was recently awarded a PhD in electric ecology which may not seem relevant to your industry, but it imbued me with
            <strong> grit</strong>, a <strong>get-up-and-go attitude,</strong> and a <strong>rigorous</strong> and <strong>methodical</strong> method for solving problems.</span>, 
            <span key="bold-text">
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
                text: <span><strong>Data analysis (R, Matlab, Python). </strong></span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li>I am excellent at pulling insights out of datasets. I pride myself in being able to find trends hidden to most others.</li>
                        <li>R: I use this for statistical tests and complex modelling including linear mixed models (LMMs, GLMs). It's also good for plotting using <code>ggplot2</code> (<Link href="/images/R_plot_example.png" target="_blank" className={styles.customLink}>see here</Link>). </li>
                        <li>MATLAB: I use this for large matrix analysis, bespoke signal analysis and to analyse some other odd datatypes that you only really find in MATLAB.</li>
                        <li>Python: I use this for anything the other two can't do. I have experience with <code>pandas</code> and <code>matplotlib</code> among others.</li>
                    </ul>
                )
            },
            {
                text: <span><strong>Software development (Python, Javascript, CSS, Matlab, HTML).</strong></span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li>This is something I have been focusing on since finishing my PhD. I think I have a talent for it.</li>
                        <li>Python: I am building an webapp for storing photos at the moment using a Flask backend coded in python. I also built a small electric signal recorder using a Raspberry Pi, which was controlled using a piece of Python software I wrote. </li>
                        <li>MATLAB: I wrote a couple of little applications which would collect and plot data for some Master's students I was mentoring.</li>
                        <li>Javascript, CSS, HTML: Currently learning this to build things like this website!</li>
                    </ul>
                )
            },
            {
                text: <span><strong>Project management.</strong></span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li>I independently managed all aspects of my thesis research, from budgeting and data collection to analysis and report writing, which required strong project management skills and self-reliance.</li>
                        <li>I'm adaptable and can get a project back on track: I suffered loss of equipment and drought conditions on fieldwork, but by utilising a pre-prepared contingency kit (plan for every scenario!), I was able to successfully complete the project objectives despite adverse conditions.</li>
                        <li>I strategically planned and executed fieldwork across multiple seasons, ensuring optimal timing for data collection while effectively managing time and resources for a four-year research project within an £11k budget.</li>
                    </ul>
                )
            },
            {
                text: <span><strong>Leadership.</strong></span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li>I’ve mentored students, both formally and informally, guiding them through their research and development, and ensuring they gained the skills and confidence needed to succeed in their projects. I even built some tools to smooth their research process.</li>
                        <li>I led the Entomology Society for two years, organising events and managing activities despite the seasonal challenges (insects are about over the summer when students are on holiday), demonstrating leadership in the face of difficulties and keeping the society active and engaged.</li>
                        <li>While conducting my independent research, I took ownership of the entire process—from budgeting to fieldwork and reporting—making key decisions and driving the project forward, showcasing strong leadership and project management skills.</li>
                    </ul>
                )
            }
        ],
        visible: true
    },
    {
        title: 'Relevant mindsets',
        summary: 'Here are a few relevant mindsets I have learned over the course of my PhD which I think are critical for success.',
        bullets: [
            {
                text: <span><strong>Anything can be learned.</strong> There are times when I didn't have the skills needed for a task. So I learned them.</span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li>This website is custom-built from scratch. It uses CSS, JavaScript, HTML and a handful of other technologies I learned to make this website. You can see the result yourself.</li>
                        <li>Two months before the end of my PhD I realised that I needed much more complicated analysis for my data. So I used chatGPT to teach me how to do Linear Mixed Models and other complicated statistical techniques. This ended up being a tentpole of my PhD thesis.</li>
                        <li>I wanted to make a 3D model of my setup. I had no experience in 3D modelling, so I learned how to use a basic computer-aided design (CAD) program. You can see the result <Link href="/images/Set_up_full.png" target="_blank" className={styles.customLink}>here</Link>. </li>
                    </ul>
                )
            },
            {
                text: <span><strong>Don't fear failure.</strong> If you never fail, you're not trying hard enough. There have been times nothing has been going right for me, but I have learned that you can always pick yourself up and find the opportunities within a bad situation.</span>,
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
                        <li>When my relationship with my supervisor began to falter, I took proactive steps to address it. Before it could, I took proactive steps to make things right. We had a hard, honest conversation and realigned our expectations of one another. After that conversation, our relationship was much more productive than it had been before. </li>
                        <li>Communication is also explaining complex ideas in a digestible way! I have experience in presenting my work at scientific conferences, in lab meetings and even pre-school children who have come across my field equipment. </li>
                    </ul>
                )
            },
        ],
        visible: true
    },
    {
        title: 'Personal qualities',
        summary: 'These are my strongest personal qualities',
        bullets: [
            {
                text: <span><strong>Resilience.</strong></span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                       <li>My PhD was particularly high-risk, and I faced more failures than most. Each setback strengthened my determination, and I continuously found ways to overcome challenges, ultimately driving my research forward to successful outcomes.</li>
                    </ul>
                )
            },
            {
                text: <span><strong>Problem solving.</strong></span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li> I thrive on finding innovative solutions, and during my PhD, I developed creative experimental designs that helped overcome logistical and research barriers, allowing me to gather critical data despite constraints.</li>
                        <li> I'm great at leveraging technologies and other tools to overcome problems. That's how I came to learn <Link href="/images/Reuben_cube.png" target="_blank" className={styles.customLink}>graphical design</Link> and so many coding languages.</li>
                    </ul>
                )
            },
            {
                text: <span><strong>Adaptability and flexibility.</strong></span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li>I excel at wearing many hats and switching between tasks quickly. Whether it’s managing fieldwork, analysing data, or writing reports, I can effortlessly adapt to changing demands and deliver results efficiently across multiple contexts.</li>
                    </ul>
                )
            },
            {
                text: <span><strong>Trustworthiness.</strong></span>,
                moreInfo: (
                    <ul className={styles.customBullets}>
                        <li>Peers in my lab often turn to me when they encounter challenges, even since I have left, knowing they can rely on my thoughtful advice and steady guidance to help navigate difficult situations.</li>
                        <li>My kindness and willingness to go the extra mile mean that others trust me to offer more than just technical expertise - I’m a dependable source of encouragement and practical help.</li>
                    </ul>
                )
            },
        ],
        visible: true 
    },
    {
        title: <span style={{ fontSize: '30px', display: 'block', textAlign: 'center'  }}>Thank you for reading this far!</span>,
        summary: [
            <span key="bold-text" style={{ display: 'block', textAlign: 'center' }}>I've covered a lot so far, but there's still much more to share. For instance, I am currently working part time and pro bono for a <strong>pre-funding startup</strong> so I can showcase my <strong>commitment</strong> and gain some valuable <strong>business acumen</strong>.</span>, 
            <span key="bold-text" style={{ display: 'block', textAlign: 'center' }}>In short, I’m <strong>eager to work</strong> and keen to take on new challenges.</span>,
            <span key="bold-text" style={{ display: 'block', textAlign: 'center' }}>If you think that I might be good for your team, or you'd like to learn more</span>,
            <span key="bold-text" style={{ display: 'block', textAlign: 'center', fontSize: '40px' }}><strong>get in touch!</strong></span>
        ],
        bullets: [],
        visible: false
    }
];





export default cardData; 
