import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from "react-parallax-tilt"
function Portfolio() {
  return (
    <section id="Portfolio" className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/431744986_927896735470995_8178979807264131991_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGtqsTnRL7U7CFP4yb0SA6i5yTxp12wizDnJPGnXbCLMAMUOzv57OuOnH679I_KffFVtQtHhgNOMMQvHAp86E5s&_nc_ohc=RZvSDCB22ywAX8OPJpK&_nc_ht=scontent.fbkk10-1.fna&oh=03_AdSKve0fIAl6kvaniSg3vRi75bWG8KVBlro4RYHtxf_pVQ&oe=66150CCF" alt="" />
            </Tilt>
            <p>IMA file to image</p>
        </div>
        
        <div className={styles.port_items}>
        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://miro.medium.com/v2/resize:fit:612/1*G9UfaUBS_VqtFILMe37fZw.jpeg" alt="" />
            </Tilt>
            <p>rock paper scissors game</p>
        </div>
        <div className={styles.port_items}>
        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/430848316_1362274417774869_6672407106608611355_n.png?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEh-qk3G6QPfo57kQHK9Lcadj30l1ssMIV2PfSXWywwhb2X3kdee8wS41IWkM5oLjBBLibifwbBW8Kpsk5qS0Vk&_nc_ohc=fHVMaqm0KXoAX9fhzzk&_nc_oc=AQk3Rxl2MmhC-PRiJc4JiQehwCG7Ez3GwJ0NmJ06Cg6btBy2r0ecVK0fhhPBbInNAts&_nc_ht=scontent.fbkk10-1.fna&oh=03_AdSOesTKPPIVWgCwot3blmlrNI7zGbqGkNoHp9b0UPp-ag&oe=6615009C" alt="" />
            </Tilt>
            <p>MRI segmentation</p>
        </div>
        <div className={styles.port_items}>
        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://global-uploads.webflow.com/619e15d781b21202de206fb5/6322f3a5fcaea3a87b89b3e7_tips-for-shopping-apps-holiday-season.jpg" alt="mid" />
            </Tilt>
            <p>Web app shoping</p>
        </div>
        
      </div>
    </section>
  )
}

export default Portfolio