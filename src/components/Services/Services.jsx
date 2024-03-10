import React from 'react'
import styles from './Services.module.css'  
import {FaCode, FaPaintbrush, FaDesktop} from 'react-icons/fa6'
import { RiRobot2Line } from "react-icons/ri";

function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
            <FaCode/>
            <h4>Web Devlopment</h4>
            <p>ฉันสามารถทำงานออกแบบ ดีไซน์ ตัวของwebsite ได้ทั้งในส่วนที่เป็น front end และ back end</p>
        </div>
        <div className={styles.services_items}>
            <FaDesktop/>
            <h4>Web Mobile</h4>
            <p>ฉันมีความสามารถในการออกแบบ ดีไซน์ ตัวของwebsite ในรูปแบบของmobile</p>
        </div>
        <div className={styles.services_items}>
            <RiRobot2Line/>
            <h4>Design deep learning</h4>
            <p>ฉันมีความสามารถในการออกแบบ ทั้งในส่วนที่เป็น deep learning หรือ machine learning แบบพื้นฐานได้</p>
        </div>
      </div>
    </div>
  )
}

export default Services