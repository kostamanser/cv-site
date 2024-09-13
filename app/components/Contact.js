//Contact.js

import React from 'react';
import styles from './Contact.module.css';
import Image from 'next/image';
import Link from 'next/link';


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
                        alt="Phone Icon"
                        width={25}
                        height={25}
                        className={styles.icon}
                    />
                    <p><a href="tel:+44798697472">+44 798 697 472</a></p>
                </span>
                <span className={styles.container}>   
                    <Link href="https://github.com/kostamanser">
                        <Image
                            src="/assets/Github_icon.svg"
                            alt="GitHub"
                            width={50}
                            height={50}
                            className={styles.icon}
                        />
                    </Link>
                    <Link href="mailto:kostamanser@gmail.com">
                        <Image
                            src="/assets/Gmail_icon.svg"
                            alt="Email"
                            width={50}
                            height={50}
                            className={styles.icon}
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/kosta-manser">
                        <Image
                            src="/assets/LinkedIn_icon.svg"
                            alt="LinkedIn"
                            width={50}
                            height={50}
                            className={styles.icon}
                        />
                    </Link>
                </span>
            </div>
        </div>
    )
}



export default Contact;