import React from 'react'
import styles from './Contact.module.css'
import { MdAlternateEmail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

function Contact() {
  return (
    <section id="Contact" className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Hit me up for jobs!</h3>
                <p className={styles.contact_desc}>
                คุณจะปล่อยให้ Dev ที่เก่งทุกอย่างไปหรอ?: <br />
                ถ้าคุณยังไม่มีพนักงานด้านนี้ ผมมั่นใจว่าผมทำงานได้ดีที่สุดในบริษัทแน่นอนถ้าคุณติดต่อผม. <br />
                หรือถ้าคุณมีพนักงานอยู่แล้ว ผมก็มั่นใจ ว่าผมสู้เขาไม่ได้ แต่ผมพร้อมที่จะเรียนรู้ และผมเก่งโคตร 
                <h3>อยากรู้ไหมว่าผมเก่งแค่ไหน ติดต่อมา</h3>
                </p>
                <p><MdAlternateEmail/> 65020957@up.ac.th</p>
                <p><BsFillTelephoneInboundFill/> 065-493-1034</p>
            </div>
            <div className={styles.contact_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder="eg. Somchai"></input>
                        </div>
                        <div>
                            <label htmlFor="last name">Last Name</label>
                            <input type="text" placeholder="eg. Jaidee"></input>
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder="eg. asdfsa@dddd.com" />
                    <label htmlFor="message">Your message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Type here"></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
      
    </section>
  )
}

export default Contact