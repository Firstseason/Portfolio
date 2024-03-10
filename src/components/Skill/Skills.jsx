import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaPython, FaDocker, FaNode, FaSteam} from 'react-icons/fa6'

function Skills() {
  return (
    <section id="Skill" className={styles.skills_container}>
        <h3 className={styles.skills_title}>My Skills Set</h3>
        <ul className={styles.skills_list}>
            <li><FaSquareJs/></li>
            <li><FaReact/></li>
            <li><FaPython /></li>
            <li><FaDocker/></li>
            <li><FaNode/></li>
            <li><FaSteam/></li>
        </ul>
      
    </section>
  )
}

export default Skills