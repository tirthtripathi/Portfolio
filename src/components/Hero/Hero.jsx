import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "/src/components/Hero/Hero.module.css";
import { getImageUrl } from "../../utils";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["an Engineer", "a Web Developer", "a React Developer", "UI/UX designer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <h1>Hi, I'm Tirth</h1>
      <div>
        <h2>I am
          <span className={styles.typeEffect}> {typeEffect}</span>
          <span className={styles.cursor}>
            <Cursor cursorStyle="❕" cursorBlinking='' />
          </span>
        </h2>
        </div>
        <div className={styles.peragraph}>
          <p>I'm passionate about crafting
            <span> dynamic web applications </span>
            using <span> React.js </span>.
          </p>
          <p>With a solid foundation in
            <span> front-end </span>
            technologies, I bring a keen eye for design and usability to my projects
          </p>
          <p>I aim to contribute
            <span> innovative solutions </span>
           to the ever-evolving field of
            <span> web development </span>. Let's
            <span> connect and explore </span>
            the possibilities of creating exceptional digital experiences together!
          </p>
          <a href="mailto:tirthofficial563@gmail.com" className={styles.contentBtn} >Contect Me</a>
        </div>
      </div>
      <img className={styles.heroimg} src={getImageUrl('hero/heroimg.png')} alt="Hero Image me"/>
      <div className={styles.topblur}></div>
      <div className={styles.bottomblur}></div>
    </section>
  )
}

export default Hero;