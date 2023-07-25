import React from "react";
import styles from "./Contactform.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import {HiMail} from "react-icons/hi";
function Contactform() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_button}>
            <Button
              text={"VIA SUPPORT CHAT"}
              icon={<MdMessage fontSize="24px" />} />
            <Button text={"VIA CALL"} icon={<FaPhoneAlt fontSize="24px" />} />
          </div>
          <Button  isoutline={true} text={"VIA EMAIL FORM"} icon={<HiMail fontSize="24px" />} />
          <form action="">
           <div className={styles.form_container}>
           <label htmlFor="name">Name</label>
            <input type="text" />
           </div>
           </form>
           <form action="">
           <div className={styles.form_container}>
           <label htmlFor="name">Email</label>
            <input type="email" />
           </div>
           </form>
           <form action="">
           <div className={styles.form_container}>
           <label htmlFor="text">Text</label>
            <textarea name="text" id="" cols="30" rows="8"></textarea>
           </div>
           
           </form>
           <div style={{display:'flex',justifyContent:'end'}}>
           <Button text={"VIA CALL"} icon={<FaPhoneAlt fontSize="24px" />} />
           </div>
        </div>
        <div className={styles.contact_image}>
            <img src="/images/image.svg" alt="image 2" />
        </div>
      </section>
    </>
  );
}

export default Contactform;
