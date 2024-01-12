import React from "react";
import styles from "/src/components/About/About.module.css";
import { getImageUrl } from "../../utils";
function About() {
    return (
        <section className={styles.container} id="about">
            <div className={styles.about}>
                <div className={styles.bounce} >
                    <div className={styles.a}>A</div>
                    <div className={styles.b}>b</div>
                    <div className={styles.o}>o</div>
                    <div className={styles.u}>u</div>
                    <div className={styles.t}>t</div>
                    <div className={styles.shadow}></div>
                    <div className={styles.shadowtwo}></div>
                </div>
            </div>
            <div className={styles.content}>
                <img className={styles.aboutimg} src={getImageUrl('about/aboutimg.png')} alt="me sitting with a laptop" />

                <ul className={styles.aboutitems}>
                    <li  className={styles.aboutitem}>
                       <img src={getImageUrl('about/about1.png')} alt="graduation icone" />
                        <div className={styles.aboutitemtext}>
                            <h3>IT Engineer</h3>
                            <p>
                            I am currently pursuing engineering at AD Patel Institute of Technology, maintaining a commendable 8.12 CGPA until the 5th semester, reflecting my dedication to academic excellence.
                            </p>
                        </div>
                    </li>
                    <li  className={styles.aboutitem}>
                       <img src={getImageUrl('about/about2.png')} alt="SIH icone" />
                        <div className={styles.aboutitemtext}>
                            <h3>SIH2023</h3>
                            <p>
                             Me and my team participated in SIH2023, I was the team leader and I worked on prototype design of our project addressing mental health challenges
                            </p>
                        </div>
                    </li>
                    <li  className={styles.aboutitem}>
                       <img src={getImageUrl('about/about3.png')} alt="Event icone" />
                        <div className={styles.aboutitemtext}>
                            <h3>Events</h3>
                            <p>
                            I actively engaged in over 10 events, both within and beyond the college, showcasing my dynamic involvement and leadership in diverse extracurricular activities.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;