import React from "react";
import styles from "/src/components/Skills/Skills.module.css";
// import getImageUrl from "../../utils";
function Skills(){
    return(
        <section className={styles.container} id="skills">
              <div className={styles.skills}>
                 <div className={styles.bounce}>
                    <div className={styles.S}>S</div>
                    <div className={styles.k}>k</div>
                    <div className={styles.i}>i</div>
                    <div className={styles.l}>l</div>
                    <div className={styles.l}>l</div>
                    <div className={styles.s}>s</div>
                 </div>
              </div>
        </section>
    )
}

export default Skills;