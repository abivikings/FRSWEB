import React from "react";
import styles from './Reasons.module.css'

const Reasons=()=>{
    return(
        <div className={styles.Reasons} id="reasons">
            <div className={styles.leftR}>
                <img src='../images/home/image1.jpg' alt="" />
                <img src='../images/home/image2.jpg' alt="" />
                <img src='../images/home/image3.gif' alt="" />
                <img src='../images/home/image4.jpg' alt="" />
            </div>
            <div className={styles.rightR}>
                <span>some Reasons</span>

                <div>
                    <span className="stroke-text">why</span><span> Choose us?</span>
                </div>

                <div className={styles.detailsR}>
                    <div>
                        <img src='../images/home/tick.png' alt="" />
                        <span>OVER 140+ live campaigns</span>
                    </div>
                    <div>
                        <img src='../images/home/tick.png' alt="" />
                        <span>TRAINed Tean members with potential capabilities</span>
                    </div>
                    <div>
                        <img src='../images/home/tick.png' alt="" />
                        <span>World wide network station</span>
                    </div>
                    <div>
                        <img src='../images/home/tick.png' alt="" />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span style={{color: "var(--gray)", fontWeight: "normal"}}>Our partners</span>
                <div className={styles.partners}>
                    <img src='../images/home/nb.png' alt="" />
                    <img src='../images/home/adidas.png' alt="" />
                    <img src='../images/home/nike.png' alt="" />
                    </div>
            </div>
        </div>
        )
    
    }
    
    export default Reasons