//Contact.js

import React from 'react';
import styles from './Contact.module.css';
import Image from 'next/image';


const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.profileImageWrapper}>
                <Image
                    src="/assets/profile-image.jpeg"
                    alt="Profile"
                    width={150}
                    height={150}
                />
            </div>
            <div className={styles.contactDetails}>

                <span className={styles.container}>
                    <Image
                        src="/assets/Phone_icon.svg"
                        alt="Profile"
                        width={25}
                        height={25}
                        className={styles.icon}
                    />
                    <p>Phone: <a href="tel:+44798697472">+44 798 697 472</a></p>
                </span>
                <span className={styles.container}>
                    <Image
                        src="/assets/Gmail_icon.svg"
                        alt="Profile"
                        width={25}
                        height={25}
                        className={styles.icon}
                    />
                    <p>Email: <a href="mailto:kostamanser@gmail.com">kostamanser@gmail.com</a></p>
                </span>
                <span className={styles.container}>
                    <Image
                        src="/assets/Github_icon.svg"
                        alt="Profile"
                        width={25}
                        height={25}
                        className={styles.icon}
                    />
                    <p>GitHub: <a href="https://github.com/kostamanser" target="_blank" rel="noopener noreferrer">https://github.com/kostamanser</a></p>
                </span>
                <span className={styles.container}>
                    <Image
                        src="/assets/LinkedIn_icon.svg"
                        alt="Profile"
                        width={25}
                        height={25}
                        className={styles.icon}
                    />
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/kosta-manser" target="_blank" rel="noopener noreferrer">linkedin.com/in/kosta-manser</a></p>
                </span>
            </div>
        </div>
    )
}



export default Contact;