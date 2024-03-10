import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt"
function Hero() {
  return (
    <section id="Hero" className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Welcom to my World</p>
            <h3 className={styles.text_2}>Natee Putthasorn</h3>
            <p className={styles.text_3}>
              <TypeAnimation
                sequence={[
                  "I am a full-stack",
                  1000, 
                  "Web developer , tester",
                  1000,
                  "or anything related to tech",
                  1000
                ]}
                speed={50}
                repeat={Infinity}
              />
</p>
            <p className={styles.text_4}>
            I have many talents in many ways. If you are interested, please scroll down and take a look. I guarantee you will like it.
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="https://github.com/Firstseason" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/natee-putthasorn-b107952b9/" target="_blank">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/chearnt.putthasorn/" target="_blank">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>

          <div>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <div className={styles.hero_image} >
              <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.6435-9/85165298_634883220593559_5535086643989446656_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGN04q0AUiBzhEI1TlUkDvSBfzv7hZ1f3cF_O_uFnV_d7xb5uchmPZ0xiXYF17y5ySEZbrtTyE6KSkuknqwvzus&_nc_ohc=XfEqeiggCy8AX-BTann&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfChP66XL8e8KHFo9iEbt73eAA_vV1DOqHjOgIVqUPRztA&oe=6614E655" alt="profile" />
            </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;