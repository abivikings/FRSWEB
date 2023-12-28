import React from "react";
import styles from './Footer.module.css'

const Footer=()=>{
    return(
        <div className={styles.FooterContainer}>
            <hr/>
            <div className={styles.footer}>
                <div className={styles.socialLinks}>   
                    <img src='../images/home/github.png' alt="" />
                    <img src='../images/home/linkedin.png' alt="" />
                    <img src='../images/home/instagram.png' alt="" />
                </div>
                <div className={styles.logoF}>
                    <img src='../images/home/logo.png' alt=""/>
                </div>
            </div>
            <div className={`blur ${styles.blurF1}`}></div>
            <div className={`blur ${styles.blurF2}`}></div>
        </div>
        )
    
    }
    
    export default Footer