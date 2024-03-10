import React , { useState } from "react";
import styles from "./NavBar.module.css";
import { FaBars } from "react-icons/fa6";
function Navbar() {
  const [isToggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!isToggle);
  }
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <h2 href="#Hero">MyPort</h2>
          </div>

          <ul>
            <li>
              <a href="#Skill">Skills
              </a>
              </li>
            <li>
              <a href="#Portfolio">Portfolio
              </a>
              </li>
            <li>
              <a href="#Contact">Contact</a></li>
          </ul>

          <div className={styles.button}>
            <a href="#" className={styles.pagel}>HEY YOU!!!</a>
            <a href="#" className={styles.paget}>HIRE ME</a>
          </div>
        </div>

        < FaBars className={styles.bars} onClick={handleToggle} />
        {isToggle ? (
          <>
            <ul className={styles.mobile_menu}>
            <li>
              <a href="#Skill">Skills
              </a>
              </li>
            <li>
              <a href="#Portfolio">Portfolio
              </a>
              </li>
            <li>
              <a href="#Contact">Contact</a></li>
          </ul>

            <div className={styles.mobile_button}>
              <a href="#" className={styles.pagel}>HEY YOU!!!</a>
              <a href="#" className={styles.paget}>HIRE ME</a>
            </div>
          </>
        ) : null
        }
      </div>
    </nav>
  );
}

export default Navbar;